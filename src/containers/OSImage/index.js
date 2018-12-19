import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
OSイメージの作成方法を解説します。

# OSの入手
RaspberryPiのホームページから NOOBS または Raspbian をダウンロードし、microSDカードに書き込みます。

&[https://www.raspberrypi.org/downloads/]https://www.raspberrypi.org/downloads/

書き込み方法はRaspberryPiのホームページを参照してください。

# キーボードやWiFi、タイムゾーンの設定

ネットで調べてRaspberryPiのキーボードを日本語にしたりWiFiでネットに繋いだりタイムゾーンの設定を行なってください。

# dora-engineのインストール
以下のコマンドを実行します。

~
$ cd ~
$ git clone http://github.com/yamagame/dora-engine
~

ダウンロードが終わったら続けて次のコマンドを実行します。

~
$ cd dora-engine
$ ./setup-system.sh
~

しばらく待ちます。
続けて次のコマンドを実行します。

~
$ ./setup-nodejs.sh
~

ここでエラーが出る場合は次のコマンドを試してみてください。

~
$ npm rebuild grpc --build-from-source
~

フォントをインストールする場合は次のコマンドを実行します。

~
$ ./setup-font.sh
~

以下、下記URLの「/boot/config.txtを編集する」あたりから作業を進めてください。

&&[https://github.com/yamagame/dora-engine]https://github.com/yamagame/dora-engine

# 画面のスリープを無効化する

!! /etc/lightdm/lightdm.conf を管理者権限で修正します。

~
$ sudo nano /etc/lightdm/lightdm.conf
~

下記を追加します。

~
xserver-command=X -s 0 -dpms
~
`

export default class OSImage extends Component {
  render() {
    return <PageContainer title="microSDカード作成" data={data} />
  }
}
