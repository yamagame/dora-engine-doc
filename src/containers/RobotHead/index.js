import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
- 頭の動きの停止

~
http.post/http://localhost:3091/stop
~

- 頭の動きの復帰

~
http.post/http://localhost:3091/idle
~

# 認証情報をつけてコントロールする場合

- 頭の動きの停止

~
http.credential.post/http://localhost:3091/stop
~

- 頭の動きの復帰

~
http.credential.post/http://localhost:3091/idle
~

認証情報を有効にするには、robot-server.js プロセスと servo-head.js のプロセスの両方に下記の環境変数を設定します。

- ROBOT_PRIVATE_KEY
- ROBOT_PUBLIC_KEY
- ROBOT_CREDENTIAL_ACCESS_CONTROL

環境変数 ROBOT_PRIVATE_KEY と ROBOT_PUBLIC_KEY に、それぞれ秘密鍵と公開鍵へのパスを指定し、ROBOT_CREDENTIAL_ACCESS_CONTROL に true を指定します。

servo-head.js 側は ROBOT_PRIVATE_KEY の指定は不要です。

`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="頭の動きを止める" data={data} />
  }
}
