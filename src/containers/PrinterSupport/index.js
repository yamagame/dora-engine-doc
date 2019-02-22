import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
dora-engine から直接印刷することはできませんが、ドラブラウザとの組み合わせでWebページを印刷することができます。

&&[https://github.com/yamagame/dora-browser]https://github.com/yamagame/dora-browser

# プリンタの準備

ラズパイでプリンタが使えるようにするために、以下のコマンドを実行して、cups と system-config-printer をインストールします。

~
$ sudo apt-get install cups system-config-printer
~

インストールすると、メニューの Preferences に Print Settings メニューが現れますので、使用するプリンタを追加します。

# ドラブラウザの設定

印刷するプリンタ名を環境変数 ROBOT_PRINTER_NAME に指定して、ドラブラウザを起動します。
以下は例です。

~
ROBOT_PRINTER_NAME=Canon_iP110
~

# 印刷リクエスト

以下のコマンドをシナリオエディタで実行してドラブラウザのウインドウを開きます。
.payload.url には開きたいWebページのURLを指定します。

~
/.payload.url/http://localhost:3090/
/http.credential.post/http://localhost:5000/load/main
~

ウインドウが開いたら以下のコマンドで印刷を開始します。

~
/http.credential.post/http://localhost:5000/print/main
~

# 注意点

Electronでは、セキュリティ上の理由から信用のないWebページは開いてはいけません。

`

export default class Sequrity extends Component {
  render() {
    return <PageContainer title="プリンタ対応" data={data} />
  }
}
