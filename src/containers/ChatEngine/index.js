import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
ドラエンジンにはルールベースのチャットエンジンが付いてます。

ルールはGoogleスプレッドシートで作成します。

$ /image/chat-data.png

スプレッドシートのカラムは、ask と answer です。askに書かれたキーワードが渡されると、answerに書かれたキーワードが回答となります。

# 準備

ロボットエンジンがGoogleのスプレッドシートにアクセスできるように設定する必要があります。

GoogleのWebサイトから認証ファイルをダウンロードし、環境変数ROBOT_GOOGLE_SHEET_CREDENTIAL_PATHで指定します。合わせてトークンの保存先をROBOT_GOOGLE_SHEET_TOKEN_PATHで設定します。
こちらのWebページでシートAPIを有効にします。

&&[https://developers.google.com/sheets/api/quickstart/nodejs]https://developers.google.com/sheets/api/quickstart/nodejs

上記ページのStep1を作業して credentials.json を取得し、保存先を環境変数ROBOT_GOOGLE_SHEET_CREDENTIAL_PATHで指定します。
以下は例です。

~
ROBOT_GOOGLE_SHEET_CREDENTIAL_PATH=/home/pi/credentials/sheet-api-credentials.json
ROBOT_GOOGLE_SHEET_TOKEN_PATH=/home/pi/credentials/sheet-api-token.json
~

# チャットコマンド

チャットコマンドとして以下のコマンドがあります。

- /dora-chat
- /dora-chat/random
- /dora-chat/search
- /dora-chat/time
- /dora-chat/date
- /dora-chat/day

チャットデータをダウンロード済みの場合はダウンロードされたデータを使用します。ダウンロードされていない場合はGoogleのスプレッドシートからダウンロードします。
下記は使い方の例です。

~
/.payload/こんばんは
/.chat.sheetId/[SheetID]
/.chat.sheetName/[SheetName]
/dora-chat
/log/{{payload}}
~

この様にするとSheetIDのSheetNameに書かれた「こんばんは」の応答が返ってきます

使い方については下記のページを参照してください。

&&[https://github.com/yamagame/dora/tree/master/doc]https://github.com/yamagame/dora/tree/master/doc

`

export default class ChatEngine extends Component {
  render() {
    return <PageContainer title="チャットエンジン" data={data} />
  }
}
