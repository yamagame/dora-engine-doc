import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
音声合成に AWS Polly を使用することができます。

&&[https://aws.amazon.com/jp/polly/]https://aws.amazon.com/jp/polly/

# 準備

AWSマネージメントコンソールを使って、IAM に AWS Polly のリードオンリー(AmazonPollyReadOnlyAccess)のユーザーを作成します。

ユーザー作成時にクレデンシャルが含まれたCSVファイルがダウンロードできます。
クレデンシャルファイルに含まれいるアクセスキーとシークレットキーをコピペして、JSON形式のクレデンシャルファイルを作成します。

~
{
  "accessKeyId": "アクセスキー",
  "secretAccessKey": "シークレットアクセスキー"
}
~

環境変数 ROBOT_AWS_CREDENTIALS にJSON形式のクレデンシャルファイルを指定します。

# 発話方法

以下のようなコマンドでAWS Pollyを使って発話できます。

~
/.speech.languageCode/aws.ja-JP
こんにちは
~

以下のようにすると VoiceId を使って発話することもできます。languageCode と voiceId が指定されている場合は、voiceId が優先されます。

~
/.speech.languageCode/aws
/.speech.voiceId/Mizuki
こんにちは
~
`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="AWS Polly 対応" data={data} />
  }
}
