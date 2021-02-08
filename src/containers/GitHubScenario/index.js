import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
シナリオをGitHubで管理する方法を説明します。

dora-engineのシナリオは以下の場所に配置されています。

~
/home/pi/Documents
~

GitHubにリポジトリを作成して、/home/pi/Documentsディレクトリで clone します。

~
$ cd ~/Documents
$ git clone https://github.com/[アカウント名]/[リポジトリ名]
~

リモートリポジトリを更新したら git pull でシナリオをアップデートできるようになります。

# シナリオの更新

以下のコマンドを実行するとリモートのシナリオを持ってくることができます。

~
$ cd ~/Docuemtns/[リポジトリ名]
$ git checkout .
$ git pull
~

#リソースを一元管理する

それぞれのディレクトリのシンボリックリンクを以下のようにして作成します。

~
$ cd ~/Documents/[リポジトリ名]
$ ln -s \`realpath ~/Sound\` Sound
$ ln -s \`realpath ~/Pictures\` Pictures
$ ln -s \`realpath ~/dora-engine/command\` Command
~
`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="シナリオのGitHub管理" data={data} />
  }
}
