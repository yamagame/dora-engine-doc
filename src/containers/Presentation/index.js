import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
ロボットによるプレゼンテーション画面は以下のURLをブラウザで開くと表示されます。

~
http://[ロボットのIPアドレス]:3090/
~

初期状態では、以下のような画面になります。

$ /image/presentation/002.png

適当な名前を入力してスタートボタンをクリックします。

$ /image/presentation/001.png

プレゼンテーション画面はロボットエンジンが以前の画面を記憶していますので、以前に何かしらの画面が表示されていればその画面が表示されます。

# スライド表示コマンド

以下の様なコマンドをスクリプトエディターで実行するとプレゼンテーション画面の画像が変更できます。

~
/quiz.slide/images/sunset/001.png
~

imagesフォルダは、初期状態では/home/pi/Picturesフォルダになります。画像はRaspberryPi内のPicturesフォルダに配置しておかないといけません。

#参考資料

&&[ロボットプレゼン入門]https://docs.google.com/presentation/d/16PMK76QiX3qS9WauVdC11oTb866oyq26hPyFJG0cQQ8
`

export default class Presentation extends Component {
  render() {
    return <PageContainer title="プレゼンテーション" data={data} />
  }
}
