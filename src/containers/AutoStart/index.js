import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
RaspberryPiの電源オンでロボットエンジンが起動する方法を解説します。

# ロボットエンジンのプロセス

ロボットエンジンは、robot-serverプロセスと、servo-headプロセスが協調して動作しています。

! servo-headプロセス

ボタンやモーターの制御、ゲームパッドのイベントを扱っているプロセスです。RaspberryPiのボタンやモーターなどにアクセスするには、プロセスが管理者権限で動作する必要があります。そのため、servo-headプロセスは管理者権限で動作させます。

! robot-serverプロセス

各種Webアプリは、音声認識、音声合成機能を扱っているプロセスです。

# 自動起動の設定

自動起動の設定は以下のコマンドを実行すると設定できます。このスクリプトは１度設定すると、２度目はエラーになります。

~
$ cd ~/dora-engine
$ ./setup-autostart.sh
~

# setup-autostart.shは何をしているか？

~
#!/bin/sh
cd ~

cd dora-engine
sudo mv robot-server.service /lib/systemd/system/
sudo mv servo-head.service /lib/systemd/system/
sudo mv movie-client.service /lib/systemd/system/
sudo systemctl enable robot-server.service
sudo systemctl enable servo-head.service
sudo systemctl enable movie-client.service
# sudo service robot-server start
# sudo service servo-head start
# sudo service movie-client start
~

setup-autostart.shの中身は上記のようになっています。

~
sudo mv robot-server.service /lib/systemd/system/
sudo mv servo-head.service /lib/systemd/system/
~

この２行で、robot-server.serviceファイルと、servo-head.serviceファイルを/lib/systemd/system/へ管理者権限でコピーしています。

~
sudo systemctl enable robot-server.service
sudo systemctl enable servo-head.service
~

２つのファイルを/lib/systemd/system/へコピーしたあと、上記のsystemctlコマンドを実行すると、robot-server.service と servo-head.service がシステムに登録されます。

robot-server.serviceとservo-head.serviceの中身は次のようになっています。２つのファイルはほとんど同じ構成です。

~
[Unit]
Description=Cardboard Robot Service
After=servo-head.service

[Service]
#EnvironmentFile=/etc/default/robot-server
ExecStart=/bin/bash -c './robot-server.sh'
WorkingDirectory=/home/pi/dora-engine
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
~

~
[Unit]
Description=Cardboard Robot Head Service

[Service]
#EnvironmentFile=/etc/default/servo-head
ExecStart=/bin/bash -c './servo-head.sh'
WorkingDirectory=/home/pi/dora-engine
Restart=always
User=root

[Install]
WantedBy=multi-user.target
~

このファイルがシステムに登録されると、RaspberryPi起動時に、ExecStartで指定したファイルが実行されます。

# ブラウザ

RaspberryPiの標準のブラウザはChromiumです。Chromiumはオープンソース版のChromeブラウザです。ロボットの画面はブラウザを使用しています。

Chromiumを使用して画面を構成してもよいのですが、プリンタ出力やウインドウを開いたり、閉じたり、別のURLを指定したりすることが、ロボットエンジンからできません。
そのため、ロボットエンジンから操作可能な、dora-browserを使用できます。dora-browserを使用すると、ロボットエンジンをコントロールスクリプト言語である「ドラスクリプト」からブラウザをコントロールすることができます。

dora-browserの使い方は下記のURLを参照してください。

&[https://github.com/yamagame/dora-browser]https://github.com/yamagame/dora-browser
`

export default class AdminTools extends Component {
  render() {
    return <PageContainer title="自動起動" data={data} />
  }
}
