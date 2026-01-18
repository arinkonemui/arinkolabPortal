# DECISIONS: 設計決定ログ

## 2026-01-16〜: ポータル方針
- arinkolab.com は「ArinkoLab：開発ツールとメモのポータル」（H1コンセプトB）
- 問い合わせは Googleフォーム
- ブログは blog.arinkolab.com（Hugo）で運用し、ポータル側は案内ページを置く
- ツールカテゴリ（仮）: ビジネス向け / 一般向け便利ツール / ゲーマー向け
- 作りかけコンテンツは公開しない

## AdSense 対応
- arinkolab.com が本文を返す必要があるため、全面リダイレクトは廃止
- ads.txt は現状維持（将来ポータル化の節目で apex 200 直返しに移行）

## 2026-01-18: SEO 補助（推奨）
- `public/robots.txt` と `public/sitemap.xml` を配置する（必須ではないが、発見性改善のためMVPでも実施）
