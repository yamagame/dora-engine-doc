import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
ロボットエンジンからコントロールできるブラウザです。ドラブラウザは下記のページでソースコードを公開しています。

&&[https://github.com/yamagame/dora-browser]https://github.com/yamagame/dora-browser

以下のコントロールがドラスクリプトからできます。

- ウインドウを開く
- ウインドウを閉じる
- ウインドウをフルスクリーンにする
- URLを指定してウェブページを開く
- ページをリロードする
- ウインドウをプリントアウトする
- 全てのウインドウを閉じる

# 準備

ソースコードをダウンロードしてパッケージをインストールします。

~
$ cd ~
$ git clone https://github.com/yamagame/dora-browser
$ cd dora-browser
$ npm i
~

電源オンで起動する様に ~/.config/lxsession/LXDE-pi/autostart に下記の一行を追加します。

~
@/home/pi/dora-browser/start.sh
~

# ドラスクリプトからの操作

ドラブラウザはポート5000番でHTTPリクエストを待っています。以下の例では、ウインドウにmainという名前をつけて操作しています。名前を使って複数のウインドウを操作することができます。

~
//mainウインドウを開く
//信用のないウェブページは指定しないようにしてください。
/.payload.url/https://localhost:3090/
/http.post/http://localhost:5000/open/main

//フルスクリーンでmainウインドウを開く
/.payload.fullscreen/true
/.payload.url/https://localhost:3090/
/http.post/http://localhost:5000/open/main

//mainウインドウを閉じる
/http.post/http://localhost:5000/close/main

//mainウインドウを表示
/http.post/http://localhost:5000/show/main

//mainウインドウを非表示
/http.post/http://localhost:5000/hide/main

//mainウインドウをリロードする
/http.post/http://localhost:5000/reload/main

//mainウインドウを印刷する
/http.post/http://localhost:5000/print/main

//ウインドウを全て閉じる
/http.post/http://localhost:5000/closeAll
~

# セキュリティについて

公開鍵で証明を復号化することで正規のホストかどうかを判断することができます。
環境変数 ROBOT_PUBLIC_KEY に公開鍵へのパスを指定してください。

# プリンタ対応について

環境変数 ROBOT_PRINTER_NAME に印刷するプリンターの名前を指定してください。

`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="ドラブラウザ" data={data} />
  }
}
