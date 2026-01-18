# ACCEPTANCE: 受け入れ基準（完了条件）

## 必須（機能/構成）
- [ ] `https://arinkolab.com/` が 200 で本文を返す（リダイレクトのみになっていない）
- [ ] ヘッダーに: ツール / ブログ / FAQ / お問い合わせ
- [ ] フッターに: Privacy / Terms / About / Contact
- [ ] 下記URLが全て 200 で表示され、最低限の本文がある
  - [ ] `/`
  - [ ] `/tools/`
  - [ ] `/tools/business/`
  - [ ] `/tools/general/`
  - [ ] `/tools/gamer/`
  - [ ] `/tools/sql-formatter/`
  - [ ] `/blog/`
  - [ ] `/faq/`
  - [ ] `/privacy/`
  - [ ] `/terms/`
  - [ ] `/contact/`
  - [ ] `/about/`

## コンテンツ要件（審査観点）
- [ ] トップにサイト説明（複数段落）、ツール紹介、ブログ導線、注意事項がある
- [ ] SQL Formatter 紹介ページに「サンプル（整形前/後）」がある
- [ ] Contact が Googleフォームへ誘導できる
- [ ] 「準備中/工事中/近日公開」だけのページが無い
- [ ] リンク切れ（404誘導）が無い

## Cloudflare / DNS / ルール
- [ ] 旧「全面リダイレクト」は無効化されている
- [ ] `https://arinkolab.com/ads.txt` が最終的に ads.txt 本文を返す（確認はシークレット推奨）

## 手動確認
- [ ] シークレットで `https://arinkolab.com/ads.txt` を開いて正常（キャッシュ誤判定を避ける）
- [ ] モバイル幅でも最低限読める（崩壊しない）

## 推奨（SEO）
- [ ] `public/robots.txt` が存在し、Sitemap を指している
- [ ] `public/sitemap.xml` が存在し、MVPの主要ページURLが含まれている
