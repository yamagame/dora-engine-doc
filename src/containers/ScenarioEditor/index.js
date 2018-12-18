import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
ロボットをコントロールするスクリプトを編集する画面です。
$/image/scenario-editor/001.png

実行するときは左上のすべて再生ボタンをクリックします。

以下のURLをブラウザで開くと編集できます。

~
http://[ロボットのIPアドレス]:3090/scenario-editor/
~

一覧ボタンを押下するとスクリプトの一覧画面に遷移します。
$/image/scenario-editor/002.png

一覧画面で新規作成ボタンをクリックするとファイルを作成できます。ファイル名に作成したいファイル名を入力して作成ボタンをクリックします。
$/image/scenario-editor/003.png

# 部分実行

部分選択して選択範囲を再生ボタンをクリックすると選択した部分だけ実行できます。
$/image/scenario-editor/004.png
行の先頭にカーソルを配置して選択範囲を再生ボタンをクリックすると、カーソル位置以降が実行されます。
$/image/scenario-editor/005.png

# コンソール

デベロッパーコンソールにはスクリプトのログが出力されます。
$/image/scenario-editor/006.png
`

export default class ScenarioEditor extends Component {
  render() {
    return <PageContainer title="シナリオエディタ" data={data} />
  }
}
