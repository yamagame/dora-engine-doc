import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
画像の一部をボタンとして機能させることができます。

$ /image/imagemap/004.png

通常、画像をプレゼンテーションページに表示するコマンドは次の様に書きます。

~
/quiz.slide/images/greeting/001.png
~

画像にボタン枠を設定するときは、次のようなコマンドを実行します。

~
/quiz.edit/images/greeting/001.png.json
~

エディットモードでは、マウスをドラッグすることでボタン枠を設定できます。

$ /image/imagemap/001.png

ボタン枠をクリックすると選択状態になり、このときDELキーを押下すると削除することができます。サイズは変更できませんので、大きさがおかしい場合は一度削除して再度作成します。
ボタン枠をダブルクリックするとラベルの入力画面になります。

$ /image/imagemap/002.png

必要なだけボタン枠を設定します。

$ /image/imagemap/004.png

ボタン枠を設定したら /quiz.slideコマンドを実行します。このとき拡張子の最後に.jsonをつけます。

~
/quiz.slide/images/greeting/001.png.json
/wait-event
/if/こんにちは/:Hello
/if/こんばんは/:GoodEvening
/end

:Hello
こんにちは
/end

:GoodEvening
こんばんは
/end
~

ここでボタンをクリックするとpayloadにラベル文字が代入され、ラベルが発話されたときと同じ様に動作します。

`

export default class ImageMap extends Component {
  render() {
    return <PageContainer title="イメージマップ" data={data} />
  }
}
