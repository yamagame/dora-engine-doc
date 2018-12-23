import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
他のシステムと連携するとき、受け取った情報が正規のものかどうか判断する必要があります。このロボットエンジンでは秘密鍵で暗号かした署名を用いて判断することができます。

環境変数 ROBOT_PRIVATE_KEY と ROBOT_PUBLIC_KEY に、それぞれ秘密鍵と公開鍵へのパスを指定し、ROBOT_CREDENTIAL_ACCESS_CONTROL に true を指定します。

クライアント側の処理については下記URLのサンプルコードを参考にしてください。

&&[https://github.com/yamagame/dora-avatar]https://github.com/yamagame/dora-avatar

# 秘密鍵、公開鍵の作り方

秘密鍵(private.pem)は次のようなコマンドで作成します。

~
$ openssl genrsa -out private.pem 2048
~

公開鍵(public.pem)は秘密鍵(private.pem)を使って次のようなコマンドで作成します。

~
$ openssl rsa -in private.pem -outform PEM -pubout -out public.pem
~
`

export default class Sequrity extends Component {
  render() {
    return <PageContainer title="セキュリティについて" data={data} />
  }
}
