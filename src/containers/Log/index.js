import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
ログコマンドを使うとブラウザコンソールに文字を出力することができます。

~
/log/HELLO WORLD
~

$ /image/scenario-editor/007.png

ログコマンドで文字列を指定しない場合はメッセージオブジェクトを出力します。

~
/log
~

$ /image/scenario-editor/008.png

{{ mustache }} 表記を使用すると、メッセージオブジェクトの一部を出力することもできます。

~
/log/{{speech.languageCode}}
~

$ /image/scenario-editor/009.png
`

export default class MICSensitivity extends Component {
  render() {
    return <PageContainer title="ログ出力" data={data} />
  }
}
