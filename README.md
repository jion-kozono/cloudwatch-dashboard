## 概要
CDKを使用してLambda関数のCloudWatch Dashboardを作成してみる検証

## 学んだこと
- DashboardというリソースコンストラクタにWidgetを追加していくことでダッシュボードの作成が可能になる。
  - Text Widget : ダッシュボードのタイトルを表示。
  - Graph Widget : メトリックのグラフを表示。今回は以下のメトリクスを表示
    - Invocations
    - Errors
  - LogQuery Widget : クエリを用いて、ログエントリを表示。今回は10個まで。
### 参考
- https://dev.classmethod.jp/articles/cloudwatch-dashboard-for-lambda-using-cdk/
