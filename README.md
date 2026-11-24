# 下一站去哪儿 — 成都地铁扭蛋

[简体中文（默认）](#简体中文) · [日本語](#日本語) · [한국어](#한국어) · [English](#english)

> **默认界面语言：简体中文。** 本 README 提供简体中文、日语、韩语和英语说明；网站界面目前为简体中文，站点卡同时展示站名英文。

## 简体中文

从成都地铁的可抽选车站中随机选一站，给下一次出行一点灵感。无需注册或登录，免费使用。

**在线体验：** <https://hikaru-han.github.io/chengdu-metro-gacha/>

### 功能

- 单抽或十连抽，可同时筛选多条线路。
- 查看站点英文名和所属线路；抽中的车站会自动加入站点图鉴，也可回看最近抽选记录。
- 开启“只抽未收集的站”，逐步收集图鉴；可选开启出行挑战卡。
- 选择出发站后查看按站表估算的线路和换乘提示，并打开地图、百度百科或分享站点。
- 支持浅色、深色和跟随系统的主题。

暂未开通、暂停运营的车站以及仅供换乘的天府站不参与抽选。换乘提示是按站点数据估算的，请以实际列车停站、运营时间及成都轨道集团公告为准。

### 本地运行

本项目是静态网页，无需安装依赖或配置密钥。由于浏览器会限制直接打开本地 JSON 文件，请通过本地 HTTP 服务访问：

```bash
python -m http.server 8000
```

然后打开 <http://localhost:8000/>。

### 部署

网站作为静态文件发布在 GitHub Pages。仓库根目录中的 `index.html`、`stations.json`、`route.js`、`manifest.webmanifest` 和 `icon.svg` 需要一并发布；如果从 GitHub Pages 设置部署，请将发布源配置为包含这些文件的分支和根目录。

### 隐私与数据

抽选记录、站点图鉴和设置保存在当前浏览器的本地存储中；清除浏览器站点数据会重置这些内容。线路和车站资料依据用户提供的《成都轨道交通线网示意图》整理，并参考成都轨道集团和百度百科公开资料；线路及运营状态请以官方公告为准。

灵感来源：[次はどこへ — 駅ガチャ](https://la-rikopatto.github.io/kien-sekve/)。

## 日本語

成都地下鉄の対象駅からランダムに1駅を選び、次のお出かけのきっかけを作る無料のウェブアプリです。登録やログインは不要です。

**ウェブ版：** <https://hikaru-han.github.io/chengdu-metro-gacha/>

### 主な機能

- 1駅抽選または10連抽選。複数路線を同時に絞り込めます。
- 駅の英語名と路線を確認できます。抽選した駅は駅図鑑に自動登録され、最近の抽選履歴からも見返せます。
- 「未収集の駅のみ」を有効にして図鑑を集めたり、任意でお出かけチャレンジを表示したりできます。
- 出発駅を選ぶと、駅データに基づく経路・乗り換え案内を表示します。地図、百度百科、共有機能も利用できます。
- ライト、ダーク、システム設定に合わせたテーマに対応しています。

未開業駅、運休中の駅、および乗り換え専用の天府站は抽選対象外です。経路案内は駅データに基づく目安です。実際の停車駅・運行時間と成都軌道交通グループの公式発表をご確認ください。

### ローカルでの起動

依存パッケージや API キーは不要です。ブラウザーによるローカル JSON ファイルへのアクセス制限を避けるため、HTTP サーバー経由で起動してください。

```bash
python -m http.server 8000
```

その後、<http://localhost:8000/> を開きます。

### デプロイ

このサイトは静的ファイルとして GitHub Pages で公開されています。`index.html`、`stations.json`、`route.js`、`manifest.webmanifest`、`icon.svg` をまとめて公開してください。GitHub Pages の設定からデプロイする場合は、これらのファイルを含むブランチとルートディレクトリを公開元に指定します。

### プライバシーとデータ

抽選履歴、駅図鑑、設定は現在のブラウザーのローカルストレージに保存されます。ブラウザーのサイトデータを削除するとリセットされます。路線・駅データは提供された成都軌道交通路線図をもとに整理し、成都軌道交通グループおよび百度百科の公開情報を参考にしています。運行状況は公式発表をご確認ください。

着想元：[次はどこへ — 駅ガチャ](https://la-rikopatto.github.io/kien-sekve/)。

## 한국어

청두 지하철의 추첨 대상 역 중 한 곳을 무작위로 골라 다음 외출에 영감을 주는 무료 웹 앱입니다. 가입이나 로그인이 필요하지 않습니다.

**웹사이트:** <https://hikaru-han.github.io/chengdu-metro-gacha/>

### 주요 기능

- 한 역 뽑기 또는 10연속 뽑기를 지원하며, 여러 노선을 동시에 필터링할 수 있습니다.
- 역의 영문명과 노선을 확인할 수 있습니다. 뽑은 역은 역 도감에 자동으로 추가되며 최근 뽑기 기록에서 다시 볼 수 있습니다.
- ‘미수집 역만 뽑기’를 켜서 도감을 모으거나, 선택적으로 외출 챌린지를 받을 수 있습니다.
- 출발역을 선택하면 역 데이터 기준의 경로와 환승 안내를 표시합니다. 지도, 바이두 백과사전, 공유 기능도 제공합니다.
- 라이트, 다크, 시스템 설정에 따른 테마를 지원합니다.

개통 전 역, 운행 중단 역, 환승 전용 톈푸역은 추첨 대상에서 제외됩니다. 경로 안내는 역 데이터를 기반으로 한 참고 정보입니다. 실제 정차역과 운행 시간, 청두 철도교통 그룹의 공식 공지를 확인해 주세요.

### 로컬에서 실행하기

별도의 패키지나 API 키가 필요하지 않습니다. 브라우저의 로컬 JSON 파일 접근 제한을 피하려면 HTTP 서버를 통해 실행하세요.

```bash
python -m http.server 8000
```

그런 다음 <http://localhost:8000/>을 여세요.

### 배포

이 사이트는 정적 파일로 GitHub Pages에 게시되어 있습니다. `index.html`, `stations.json`, `route.js`, `manifest.webmanifest`, `icon.svg`를 함께 게시해야 합니다. GitHub Pages 설정에서 배포하는 경우 해당 파일이 포함된 브랜치와 루트 디렉터리를 게시 원본으로 지정하세요.

### 개인정보 및 데이터

뽑기 기록, 역 도감, 설정은 현재 브라우저의 로컬 저장소에 저장됩니다. 브라우저의 사이트 데이터를 지우면 초기화됩니다. 노선 및 역 자료는 제공된 청두 철도교통 노선도를 바탕으로 정리했으며, 청두 철도교통 그룹과 바이두 백과사전의 공개 자료를 참고했습니다. 운행 상태는 공식 공지를 확인해 주세요.

영감을 받은 작품: [次はどこへ — 駅ガチャ](https://la-rikopatto.github.io/kien-sekve/).

## English

A free web app that randomly picks an eligible Chengdu Metro station to inspire your next outing. No account or sign-in required.

**Try it online:** <https://hikaru-han.github.io/chengdu-metro-gacha/>

### Features

- Draw one station or ten at a time; filter by multiple metro lines.
- View station names in English and their lines. Drawn stations are added to the station collection, and recent draws can be revisited.
- Collect new stations with the “Undiscovered stations only” option, and optionally enable travel challenge cards.
- Choose an origin station to see an estimated route and transfer guidance based on the station data. Open map and Baidu Baike links, or share a station.
- Choose a light, dark, or system-matched theme.

Unopened and suspended stations, along with Tianfu Station (transfer-only), are excluded from draws. Route guidance is an estimate based on station data; check actual stops, operating hours, and official Chengdu Metro announcements before traveling.

### Run locally

This is a static website and requires no package installation or API keys. Serve it over HTTP because browsers restrict pages opened directly from local JSON files:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000/>.

### Deployment

The site is published on GitHub Pages as static files. Publish `index.html`, `stations.json`, `route.js`, `manifest.webmanifest`, and `icon.svg` together. To deploy through GitHub Pages settings, select the branch and repository root directory containing these files as the publishing source.

### Privacy and data

Draw history, the station collection, and settings are stored in the current browser’s local storage. Clearing the browser’s site data resets them. Line and station data were organized from a user-provided Chengdu Metro network map and cross-referenced with public information from Chengdu Metro and Baidu Baike. Refer to official announcements for current operating status.

Inspired by [次はどこへ — 駅ガチャ](https://la-rikopatto.github.io/kien-sekve/).
