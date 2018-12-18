import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
USBゲームパッドを接続してロボットをコントロールすることができます。

# 準備

標準ではゲームパッド連携は設定されていません。以下のコマンドを実行して準備します。

~
$ cd ~/dora-engine
$ ./setup-gamepad.sh
~

次に環境変数 ROBOT_USB_GAMEPAD に true を設定します。

ロボットプロセスの自動起動を設定している場合は以下のファイルで環境変数の設定ファイルを指定します。

~
/lib/systemd/system/servo-head.service
~

このファイルの次の１行を有効にします。

~
#EnvironmentFile=/etc/default/servo-head
　　　　　　　　　　　↓
EnvironmentFile=/etc/default/servo-head
~

!! /etc/default/servo-headを次のように作成します。

~
ROBOT_USB_GAMEPAD=true
~

!! /etc/default/servo-headファイルは管理者権限で作成してください。

設定を変更したら再起動します。

# ゲームパッドのIDを調べる

動作させたいUSBゲームパッドのIDを調べます。次のコマンドを実行します。

~
$ cd ~/dora-engine
$ sudo node gamepad.js
~

実行している状態でゲームパッドを抜き差しします。するとターミナルに次の様なログが表示されます。

~
ID:1234/4567 VencdorID:1234 ProductID:4567 ...
~

先頭のIDの部分のスラッシュ区切り１６進数４桁をメモまたはコピーします。このIDがゲームパッドの識別子です。
このIDはUSBのベンダーIDとプロダクトIDです。すべてのUSBデバイスにはベンダーIDとプロダクトIDが割り当てられています。

次にこのIDを使って次のコマンドを実行します。一旦、gamepad.jsを終了させて、以下のコマンドを実行します。

~
$ sudo node gamepad.js 0123/4567
~

0123/4567の部分は先ほど調べたIDの値にしてください。

この状態でゲームパッドのボタンを操作すると１６進数データが表示されます。この１６進数がボタンの状態を表しています。
１６進数の各ビットの意味は、ゲームパッドによって異なりますので、ここでゲームパッドのデータの状態を調べてください。

# ドラスクリプトで判定する

以下のスクリプトを実行します。

~
/button.gamepad/1234/4567
:loop
/wait-event
/switch/gamepad/:GAMEPAD_CHANGED
/goto/:loop

:GAMEPAD_CHANGED
~

ゲームパッドのボタンが押されると:GAMEPAD_CHANGEDへ遷移します。ゲームパッドのボタンの情報はメッセージオブジェクトの gamepad.data に入ります。
この gamepad.data の値を AND演算するなどして、ボタンの押下を調べます。
`

export default class GamePad extends Component {
  render() {
    return <PageContainer title="ゲームパッド連携" data={data} />
  }
}
