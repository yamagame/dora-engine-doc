import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
# マウスカーソルを消す方法

unclutterをインストールします。

~
$ sudo apt-get install unclutter
~

!! ~/.config/autostart/hide-cursor.desktop に以下の内容のファイルを作成します。

~
[Desktop Entry]
Type=Application
Name=Hide mouse cursor
NoDisplay=true
Exec=unclutter -idle 10
~

# 画面のスリープを抑制する方法

!! /etc/lightdm/lightdm.conf に以下の１行を追記します。

~
xserver-command=X -s 0 -dpms
~

# 電流警告を非表示にする

!! /boot/config.txt に以下の１行を追加します。

~
avoid_warnings=1
~
~

`

export default class Quiz extends Component {
  render() {
    return <PageContainer title="その他" data={data} />
  }
}
