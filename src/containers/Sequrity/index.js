import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
他のシステムと連携するとき、受け取った情報が正規のものかどうか判断する必要があります。このロボットエンジンでは秘密鍵で暗号かした署名を用いて判断することができます。

環境変数ROBOT_PRIVATE_KEYとROBOT_PUBLIC_KEYに、それぞれ秘密鍵と公開鍵へのパスを指定します。

クライアント側の処理については下記URLのサンプルコードを参考にしてください。

&&[https://github.com/yamagame/dora-avatar]https://github.com/yamagame/dora-avatar
`

export default class Sequrity extends Component {
  render() {
    return <PageContainer title="セキュリティについて" data={data} />
  }
}
