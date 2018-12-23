import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
Google スプレッドシートに値を書き込むことができます。データは月次毎に別のシートに書き込まれます。

$ /image/google-sheet.png

# 準備

ロボットエンジンがGoogleのスプレッドシートにアクセスできるように設定する必要があります。

GoogleのWebサイトから認証ファイルをダウンロードし、環境変数ROBOT_GOOGLE_SHEET_CREDENTIAL_PATHで指定します。合わせてトークンの保存先をROBOT_GOOGLE_SHEET_TOKEN_PATHで設定します。
こちらのWebページでシートAPIを有効にします。

&&[https://developers.google.com/sheets/api/quickstart/nodejs]https://developers.google.com/sheets/api/quickstart/nodejs

上記ページのStep1を作業して credentials.json を取得し、保存先を環境変数 ROBOT_GOOGLE_SHEET_CREDENTIAL_PATH で指定します。
以下は例です。

~
ROBOT_GOOGLE_SHEET_CREDENTIAL_PATH=/home/pi/credentials/sheet-api-credentials.json
ROBOT_GOOGLE_SHEET_TOKEN_PATH=/home/pi/credentials/sheet-api-token.json
~

下記のコマンドを使って sheet-api-token.json ファイルを作成します。

~
$ cd ~/dora-engine
$ ROBOT_GOOGLE_SHEET_CREDENTIAL_PATH=../credentials/sheet-api-credentials.json ROBOT_GOOGLE_SHEET_TOKEN_PATH=../credentials/sheet-api-token.json node google-router.js
~

コンソールに以下のメッセージが表示されれば成功です。

~
token saved
~

次のメッセージが表示された場合は、すでに作成済みです。

~
already exist token.
~

# 書き込みコマンド
下記に使用例を示します。/append-to-google-sheetで書き込みます。スラッシュ区切りで別々のカラムにデータが書き込まれます。
１番目のカラムには日付が追記されます。

~
/.googleSheetId/[SheetId]
/append-to-google-sheet/Hello/World
~

次の様にするとpayloadの値を書き込むことができます。

~
/.googleSheetId/[SheetId]
/.payload/Hello World
/append-to-google-sheet/{{{payload}}}
~
`

export default class Spreadsheet extends Component {
  render() {
    return <PageContainer title="Google スプレッドシート" data={data} />
  }
}
