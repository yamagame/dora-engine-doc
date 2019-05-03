import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
以下の場所に配置されたスクリプトをシナリオから実行することができます。

~
~/dora-engine/command
~

外部コマンドを実行するシナリオの例です。

~
/command/[コマンド名]
~

例えば、~/dora-engine/command に置かれている echo.sh シェルスクリプトを実行したい場合は、以下のようなシナリオを記述します。

~
/command/echo.sh
~

~/dora-engine/command 以外にあるコマンドは実行できません。
コマンドを配置するディレクトリは、環境変数 ROBOT_COMMAND_DIR_PATH で変更できます。
`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="外部コマンドの実行" data={data} />
  }
}
