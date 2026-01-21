# PLAN: 実装手順（デザイン改善 + 再審査維持）

## Phase 0: 前提確認
- [ ] `npm run dev` でローカル表示できる
- [ ] `npm run build` が成功し `dist/` が生成される（Pages 出力ディレクトリ）

## Phase 1: 三本柱（トップ）へUI刷新
- [ ] `src/styles/global.css`（または既存CSS）にカラートークンを追加
  - `--primary #2563eb`, `--business #1e293b`, `--general #10b981`, `--bg #f8fafc`
- [ ] トップ(`/`)を次の構成へ再整理
  - [ ] 導入（2〜3段落）
  - [ ] 三本柱カード（Business / General / Blog）
  - [ ] 人気ツール（SQLフォーマッター）導線
  - [ ] 注意（機密/免責）
- [ ] カードにアニメーションを追加（CSSのみ）
  - [ ] 初回表示: translateX(+少し) + opacity 0 → 1
  - [ ] 3枚スタガー（delay 0/80/160ms程度）
  - [ ] `prefers-reduced-motion: reduce` で無効化

## Phase 2: ツール導線の整合
- [ ] `/tools/` から Business / General へ明確に誘導（「三本柱」方針に合わせる）
- [ ] SQL Formatter は `/tools/business/` からも辿れる

## Phase 3: SEO（任意だが入れる寄り）
- [ ] `public/robots.txt` と `public/sitemap.xml` を維持/更新
- [ ] `sitemap.xml` は必須URLを全て含む（/tools/gamer は含めない）

## Phase 4: デプロイ/検証（Cloudflare Pages）
- [ ] GitHub へ commit & push
- [ ] Cloudflare Pages のビルドが成功し、`https://arinkolab.com/` が更新される
- [ ] `https://arinkolab.com/ads.txt` が ads.txt 本文を返す（シークレット推奨）

## Phase 5: 再審査（タイミングは運用判断）
- [ ] AdSense 側で再審査申請
- [ ] 申請後はページ構成を大きく揺らさない（トップ/規約/問い合わせの大枠固定）
