(function (root) {
  'use strict';

  function servicesFor(line) {
    const names = line.stations.map(entry => typeof entry === 'string' ? entry : entry.name);
    if (line.code !== '1') return [{ line, names, loop: line.code === '7' }];

    // 站表将广都、五根松放在四河和华阳之间。两种交路在四河分岔。
    const junction = names.indexOf('四河');
    const branchEnd = names.indexOf('五根松');
    if (junction < 0 || branchEnd <= junction) return [];
    const shared = names.slice(0, junction + 1);
    return [
      { line, names: shared.concat(names.slice(branchEnd + 1)), loop: false },
      { line, names: names.slice(0, branchEnd + 1), loop: false }
    ];
  }

  function transferNote(a, b) {
    if (a.service.line.code === '1' && b.service.line.code === '1') return 'sameLine';
    if ([a, b].some(node => ['R2', 'RB'].includes(node.service.line.code))) return 'walkTransfer';
    return 'transfer';
  }

  function build(lines, stationByName) {
    const byStation = new Map();

    lines.flatMap(servicesFor).forEach(service => {
      const stops = service.names.filter(name => stationByName.get(name)?.status === 'open');
      const nodes = stops.map(name => {
        const node = { name, service, edges: [] };
        if (!byStation.has(name)) byStation.set(name, []);
        byStation.get(name).push(node);
        return node;
      });

      function connectRide(from, to) {
        from.edges.push({ to, kind: 'ride', direction: service.loop ? 'inner' : stops[stops.length - 1] });
        to.edges.push({ to: from, kind: 'ride', direction: service.loop ? 'outer' : stops[0] });
      }

      for (let i = 1; i < nodes.length; i++) connectRide(nodes[i - 1], nodes[i]);
      if (service.loop && nodes.length > 2) connectRide(nodes[nodes.length - 1], nodes[0]);
    });

    function connectTransfer(a, b, note) {
      a.edges.push({ to: b, kind: 'transfer', note });
      b.edges.push({ to: a, kind: 'transfer', note });
    }

    byStation.forEach((nodes, name) => {
      nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => {
        if (a.service.line.code === b.service.line.code && name !== '四河') return;
        connectTransfer(a, b, transferNote(a, b));
      }));
    });

    // 10号线站厅和19/30号线站厅分设在高铁站两侧。
    const airportWest = byStation.get('双流机场2航站楼') || [];
    const airportEast = byStation.get('双流机场2航站楼东') || [];
    airportWest.forEach(a => airportEast.forEach(b => connectTransfer(a, b, 'walkTransferGate')));

    return { find: (origin, destination) => find(byStation, origin, destination) };
  }

  function compare(a, b) {
    return a.transfers - b.transfers || a.stops - b.stops;
  }

  // 从起点站的每条交路同时出发，先比较换乘次数，再比较乘车站数。
  function find(byStation, origin, destination) {
    if (!byStation.has(origin) || !byStation.has(destination)) return null;
    const pending = new Map();
    const best = new Map();
    byStation.get(origin).forEach(node => {
      const start = { node, transfers: 0, stops: 0, previous: null };
      pending.set(node, start);
      best.set(node, start);
    });

    while (pending.size) {
      let current = null;
      for (const candidate of pending.values()) {
        if (!current || compare(candidate, current) < 0) current = candidate;
      }
      pending.delete(current.node);
      if (current.node.name === destination) return buildTrip(current);

      current.node.edges.forEach(edge => {
        const isRide = edge.kind === 'ride';
        const next = {
          node: edge.to,
          transfers: current.transfers + Number(!isRide),
          stops: current.stops + Number(isRide),
          previous: current,
          edge
        };
        const known = best.get(next.node);
        if (known && compare(next, known) >= 0) return;
        best.set(next.node, next);
        pending.set(next.node, next);
      });
    }
    return null;
  }

  function buildTrip(end) {
    const path = [];
    for (let step = end; step.previous; step = step.previous) path.push(step);

    const steps = [];
    let leg = null;
    path.reverse().forEach(({ previous, node, edge }) => {
      const from = previous.node.name;
      if (edge.kind === 'transfer') {
        steps.push({ kind: 'transfer', from, to: node.name, note: edge.note });
        leg = null;
        return;
      }
      if (!leg) {
        leg = { kind: 'ride', from, line: node.service.line, direction: edge.direction, stops: 0 };
        steps.push(leg);
      }
      leg.to = node.name;
      leg.stops++;
    });
    return { transfers: end.transfers, stops: end.stops, steps };
  }

  root.MetroRoute = { build };
})(globalThis);
