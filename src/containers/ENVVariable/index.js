import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
ロボットエンジンの動作を環境変数で変更することができます。

# ロボットエンジンで使用できる環境変数

ロボットエンジンのソースコードの config.js を参照してください。

# 直接実行で設定する方法
コマンド実行時に環境変数を指定します。以下は SPEECH 環境変数を off 設定しています。

~
$ SPEECH=off node robot-server.js
~

設定したい環境変数が多い場合は、シェルスクリプトを作成して実行します。以下はシェルスクリプトの例です。

~
#!/bin/bash
cd \`dirname $0\`
export SPEECH=off
node robot-server.js
~

作成したスクリプトは chmod コマンドで実行権限を与えなければいけません。

# サービス起動時に環境変数を設定する方法

ロボットエンジンを自動起動するように設定した場合は、サービス起動時に環境変数を設定することができます。
以下は robot-server.service の例です。 

~
[Unit]
Description=Cardboard Robot Service
After=servo-head.service

[Service]
EnvironmentFile=/etc/default/robot-server
ExecStart=/bin/bash -c './robot-server.sh'
WorkingDirectory=/home/pi/dora-engine
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
~

setup-autolaunch.sh を実行すると、robot-server.service は以下のパスに作成されます。

~
/lib/systemd/system/robot-server.service
~

EnvironmentFileの値で環境変数を設定したファイル(/etc/default/robot-server)を指定します。
下記は /etc/default/robot-server の例です。

~
ROBOT_PRIVATE_KEY=/home/pi/credentials/robot-private-key.pem
ROBOT_PUBLIC_KEY=/home/pi/credentials/robot-public-key.pem
ROBOT_CREDENTIAL_ACCESS_CONTROL=true
ROBOT_ALLOW_LOCALHOST_ACCESS=false
GOOGLE_APPLICATION_CREDENTIALS=/home/pi/credentials/google-text-to-speech-credentials.json
ROBOT_GOOGLE_SHEET_CREDENTIAL_PATH=/home/pi/credentials/sheet-api-credentials.json
ROBOT_GOOGLE_SHEET_TOKEN_PATH=/home/pi/credentials/sheet-api-token.json
ROBOT_GOOGLE_SPEECH_DATA_DIR=/home/pi/Sound
ROBOT_GOOGLE_SPEECH_CACHE_DB_PATH=/home/pi/Sound/robot-cacheDB.json
~

ロボットエンジンは、servo-head.js と robot-server.js が協調して動作しています。
robot-server.service と同様に、servo-head.service も作成します。

servo-head.service の例を示します。

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

servo-head.service の環境変数の例を下記に示します。

~
ROBOT_PRIVATE_KEY=/home/pi/credentials/robot-private-key.pem
ROBOT_PUBLIC_KEY=/home/pi/credentials/robot-public-key.pem
ROBOT_CREDENTIAL_ACCESS_CONTROL=true
ROBOT_ALLOW_LOCALHOST_ACCESS=false
~

`

export default class Sequrity extends Component {
  render() {
    return <PageContainer title="環境変数の設定について" data={data} />
  }
}
