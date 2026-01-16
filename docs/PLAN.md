# PLAN 実装手順（MVP → 再審査）

## Phase 0 プロジェクト作成
- [ ] Astro プロジェクト作成（Empty でOK）
- [ ] `srclayoutsBaseLayout.astro` 作成
- [ ] `srccomponentsHeader.astro`, `Footer.astro` 作成
- [ ] ページ雛形を作成（下記 Phase 1）

## Phase 1 ページ作成（MVP）
- [ ] `` トップ
- [ ] `tools` 一覧
- [ ] `toolsbusiness` `toolsgeneral` `toolsgamer`
- [ ] `toolssql-formatter`（本文＋サンプル＋注意＋外部リンク）
- [ ] `blog`（案内ページ）
- [ ] `faq`（10問）
- [ ] `privacy` `terms` `about`
- [ ] `contact`（GoogleフォームURL差し込み）

## Phase 2 文章体裁の整備
- [ ] トップに「できること」「人気ツール」「ブログ導線」「注意」を配置
- [ ] フッターに PrivacyTermsAboutContact を常設
- [ ] 各ページの description を設定（最低限）

## Phase 3 Cloudflare Pages デプロイ
- [ ] GitHub へ push
- [ ] Cloudflare Pages に接続
- [ ] Build `npm run build`, Output `dist`
- [ ] カスタムドメイン `arinkolab.com` を割当
- [ ] HTTPS を確認

## Phase 4 Cloudflare ルール整理
- [ ] 旧「arinkolab.com → sqlformatter...」全面リダイレクトを無効化削除
- [ ] 必要なら限定 redirect（例 `gosqlformatter`）のみ残す
- [ ] `arinkolab.comads.txt` が最終的に ads.txt 本文へ到達することを確認

## Phase 5 再審査
- [ ] AdSense 側で再審査申請
- [ ] 申請後はページ構成を大きく揺らさない（トップ規約問い合わせは固定）
