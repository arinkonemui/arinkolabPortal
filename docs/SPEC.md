# SPEC: ArinkoLab Portal (arinkolab.com)

## 目的
`arinkolab.com` に **「ArinkoLab：開発ツールとメモのポータル」** を構築する。  
AdSense 再審査で指摘された「パブリッシャーのコンテンツがない/低い」状態を解消し、**apex ドメインが 200 + 本文を返す**状態を維持する。

## 前提（確定事項）
- ポータル: `https://arinkolab.com`（Cloudflare Pages / Astro / SSG）
- 既存ツール本体: `https://sqlformatter.arinkolab.com`（Cloudflare Pages）
- ブログ: `https://blog.arinkolab.com`（Cloudflare Pages / Hugo）
- メディア: `https://media.arinkolab.com`（Cloudflare R2 + カスタムドメイン）※現時点は「画像を埋め込む」用途のみ
- お問い合わせ: Googleフォーム（https://forms.gle/6nRrqn4BniyQsPAF9）
- 運用方針: **作りかけコンテンツは公開しない**（空ページ/準備中/リンク切れ/404誘導はNG）

## サイトの柱（現時点）
1. **ビジネス向けアプリ**（例: SQLフォーマッター）
2. **便利アプリ**（一般向けの小ツール群）
3. **ブログ**（開発ログ・日記。ゲーム系の話題もここに含める）

## 情報設計（MVPのURL）
必須（200 + 本文あり）:
- `/`
- `/tools/`
- `/tools/business/`
- `/tools/general/`
- `/tools/sql-formatter/`
- `/blog/`（※ポータル側は案内ページ。実体は `blog.arinkolab.com`）
- `/faq/`
- `/privacy/`
- `/terms/`
- `/about/`
- `/contact/`

SEO/運用（任意だが入れる寄り）:
- `/robots.txt`
- `/sitemap.xml`

## デザイン要件（A案ベース）
### カラートークン（gemini提示案.html 準拠）
CSS 変数（例）:
- `--primary: #2563eb`
- `--business: #1e293b`
- `--general: #10b981`
- `--bg: #f8fafc`

### トップページの見せ方
- トップの「三本柱」を **カード3枚** で見せる（Business / General / Blog）
- カードは **色付きヘッダー** + 本文 + リンク（詳細/開く）
- 「人気ツール」として SQL フォーマッターを明示（Business 内に配置でもOK）

### アニメーション（必須）
- 初回表示時にカードが **左→右に少しスライドしながらフェードイン**
- 3枚は **軽くスタガー（遅延）** する
- `prefers-reduced-motion: reduce` の場合は **アニメーション無効化**

### 実装制約
- **追加のUIフレームワーク/ライブラリは入れない**（Tailwind等なし）
- Astro の静的出力（SSG）。Cloudflare Pages の出力は `dist/`
- 画像埋め込みは当面やらない（media 利用は将来）

## Cloudflare / ドメイン要件
- `https://arinkolab.com/` は **ポータル配信（200）**
- 旧「全面リダイレクト」は廃止（必要なら限定パスのみ redirect）
- `https://arinkolab.com/ads.txt` は **ads.txt 本文を返す**（現状の設計を維持。将来 apex 直返しへ移行）

## 非ゴール（今回やらない）
- ポータル内のログイン/DB/動的検索
- ブログ記事のホスティング（`blog.arinkolab.com` が担当）
- media.arinkolab.com の画像加工（将来候補。CORS/直リンク制限/キャッシュが論点）
