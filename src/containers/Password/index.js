import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
このロボットエンジンは初期状態では何もアクセス制限をしていません。
同じLAN内であればIPアドレスがわかればシナリオエディターや管理者ページにアクセスできます。

次の設定を行なってアクセス制限することができます。

# 環境変数

次の２つの環境変数を以下の様に変更します。

~
ROBOT_CREDENTIAL_ACCESS_CONTROL=true
ROBOT_ALLOW_LOCALHOST_ACCESS=false
~

# パスワードの変更

初期状態ではアカウント名は admin、パスワードは robotnopassになっています。
次のコマンドを実行してパスワードのハッシュを作成します。

~
$ cd ~/dora-engine
$ node config.js [作成するパスワード]
~

以下は例です。

~
$ node config.js HOGEtest
$2b$08$YkQpdv/.y6WbkVWBcb76ReVJbMBhqJCyLvm4KwxyzoPftWXwf/dSa
~

出力されたハッシュ文字列を config.js の 45行目あたりのパスワードの部分に記入します。

~
  adminAuth: [
    //管理者用
    {
      username: 'admin',
      //default: robotnopass
      password: '$2b$08$4r.XgxukN5Bo/BrlDW6aYObEJgSC4o5NXOkTlGO71xQAumhHJJN72',
      permissions: '*',
    },
~

ロボットを再起動します。

その後、管理者ページやスケジューラにアクセスするときは、ユーザー名とパスワードを入力してログインします。

`

export default class Password extends Component {
  render() {
    return <PageContainer title="管理者パスワードの設定" data={data} />
  }
}
