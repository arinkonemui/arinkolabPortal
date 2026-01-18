# SPEC: ArinkoLab Portal (arinkolab.com)

## 目的
arinkolab.com に「ArinkoLab：開発ツールとメモのポータル」を構築する。
AdSense 再審査で指摘された「パブリッシャーのコンテンツがない/低い」状態を解消し、
将来のポータル拡張にも耐える最小構成で公開する。

## 前提（確定事項）
- ポータル: `https://arinkolab.com`（Cloudflare Pages / Astro）
- 既存ツール本体: `https://sqlformatter.arinkolab.com`（Cloudflare Pages）
- ブログ: `https://blog.arinkolab.com`（Cloudflare Pages / Hugo）
- メディア: `https://media.arinkolab.com`（Cloudflare R2 + カスタムドメイン）※現時点では主にブログ用
- お問い合わせ: Googleフォーム（https://forms.gle/6nRrqn4BniyQsPAF9）
- 運用方針: 作りかけコンテンツは公開しない（空ページ/近日公開/準備中を出さない）

## ゴール（MVP）
- arinkolab.com が 200 で本文を返す（全面リダイレクト禁止）
- 主要ページが存在し、ヘッダー/フッターから到達できる
- ツール紹介ページに説明・サンプル・注意事項がある
- blog はポータル内で「案内ページ（本文＋リンク）」として導線を用意
- AdSense 再審査に耐える体裁（本文、規約、問い合わせ、運営者情報）
- （推奨）`public/robots.txt` と `public/sitemap.xml` を配置し、検索エンジンの発見性を補助する

## サイトマップ（MVP）
- `/` トップ（本文あり）
- `/tools/` ツール一覧
- `/tools/business/`（カテゴリ）
- `/tools/general/`（カテゴリ）
- `/tools/gamer/`（カテゴリ）
- `/tools/sql-formatter/`（紹介ページ、ツール本体へ誘導）
- `/blog/`（ブログ案内ページ：テキスト＋リンク中心）
- `/faq/`（FAQ 10問程度）
- `/privacy/` プライバシーポリシー
- `/terms/` 利用規約
- `/contact/` お問い合わせ（Googleフォームへ）
- `/about/` 運営者情報

## UI/UX 方針
- 初期は「軽量・読みやすい・シンプル」優先（凝りすぎない）
- ただし後で見た目を強化できる構造（コンポーネント分割）は維持
- ヘッダー: ツール / ブログ / FAQ / お問い合わせ
- フッター: Privacy / Terms / About / Contact

## コンテンツ方針（審査対策）
- 「リンク集だけ」に見えないよう、各ページに短くても本文を置く
- `/tools/sql-formatter/` にサンプルSQL（整形前/後）と注意事項を必ず入れる
- `/blog/` はリンクだけでなく、どんな内容を書くかの説明を入れる（ゲーム日記も含む）

## 実装要件（Astro）
- Astro プロジェクト
- 静的ビルド（SSG）で `dist/` を出力
- Cloudflare Pages: build `npm run build`, output `dist`
- 共通 Layout と Header/Footer をコンポーネント化
- 404 や空ページを作らない（作るなら本文ありの404ページ）

## ドメイン/ルール要件（Cloudflare）
- `https://arinkolab.com/` はポータルを配信（200）
- 旧「全面リダイレクト」は廃止し、必要なら限定パスのみ redirect（例: `/go/sqlformatter`）
- `https://arinkolab.com/ads.txt` は現状の設計を維持（後で apex 200 直返しへ移行予定）

## 非ゴール（今回やらない）
- ポータル内でのログイン/DB/動的検索（必要になったら Pages Functions / Workers を検討）
- ブログ記事自体のホスティング（blog.arinkolab.com が担当）
- media.arinkolab.com での画像加工機能（将来候補として記録はする）

## SEO 補助（推奨）
新規サイトはクロール・インデックスの反映が遅れがちなので、MVPでも以下を配置する。

- `public/robots.txt`：クロール許可と sitemap の場所を明示
- `public/sitemap.xml`：主要ページの一覧を明示（小規模でも有効）

※必須要件ではないが、運用コストが低くメリットが大きいため「任意だが入れる」方針とする。
