import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
下記のコマンドをターミナルで実行します。

~
$ cd ~/dora-engine
$ git checkout .
$ git pull
$ rm -r node_modules/dora
$ rm -r node_modules/mic
$ npm i
~

GRPC関連でエラーが出る場合は以下のコマンドを試してみてください。

~
$ npm rebuild grpc --build-from-source
~

うまく動かない場合は servo-head.service の User が pi になっているのかもしれません。
エディターで下記のファイルの User のところを root にするか、もう一度 setup-autolaunch.sh を実行してみてください。

~
/lib/systemd/system/servo-head.service
~

setup-autolaunch.sh を実行すると、servo-head.service と robot-server.service が元に戻りますので、環境変数の設定をする場合はそれぞれのファイルを適宜、書き換えてください。
`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="ドラエンジンの更新" data={data} />
  }
}
