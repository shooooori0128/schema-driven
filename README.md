# OpenAPI × Orval × MSW × Next.js スキーマ駆動開発実践 〜 25新卒向け勉強会資料 〜

## 参考記事

- [元記事（orvalのmswモックコードの生成箇所については情報古いです）](https://techtekt.persol-career.co.jp/entry/tech/221215_01)
- [mswについてもっと理解を深めたい時に読む記事](https://techtekt.persol-career.co.jp/entry/tech/221214_01)

## spec directory architecture

```yaml
spec/
├── common                           # 共通ファイル
│   ├── examples                     # レスポンスサンプル（モックでも使用）
│   │   └── CommonError500.json
│   ├── models                       # レスポンスのスキーマ定義
│   │   └── CommonError.yaml
│   └── parameters                   # クエリパラメータ
│       └── Id.yaml
├── resources                        # リソース別のディレクトリ
│   └── users                        # `https://example.com/users` に関連するAPIドキュメント
│       ├── examples
│       │   ├── AdminUser.json
│       │   ├── MemberUser.json
│       │   └── Users.json
│       ├── models
│       │   ├── User.yaml
│       │   └── Users.yaml
│       └── paths
│           ├── RequestUserById.yaml # `https://example.com/users/${id}` のリクエストに関わるAPIドキュメント
│           └── RequestUsers.yaml    # `https://example.com/users` のリクエストに関わるAPIドキュメント
├── specification.bundled.yaml       # refを解決して1つのOpenAPIファイルにしたファイル
└── specification.yaml
```
