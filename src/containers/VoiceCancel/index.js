import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
ロボットが発声中にボタン操作等で発話をキャンセルしたい場合があります。そのときは/join-flowコマンドを使用します。

下記はサンプルコードです。

~
/goto/:おしゃべり/:キャンセル待ち

:おしゃべり
こんにちは
わたしはおしゃべりロボです。
どうぞよろしくお願いします。
/join-flow
/goto/:次の処理へ

:キャンセル待ち
/.waitevent.timeout/30000
/wait-event
/join-flow
/goto/:次の処理へ

:次の処理へ
/end
~

!! /gotoコマンドに複数のラベルを指定すると、それぞれのラベルへ並列でフローが開始されます。
どちらかのフローの処理が終了した後、/join-flowコマンドを使って複数のフローを一つにまとめます。

!! /join-flowを使用しないと、/gotoコマンドで遷移した、おしゃべりフローとキャンセル待ちフローの両方が実行され、「次の処理へ」は２つのフローで実行されます。
!! /join-flowコマンドを使うと、２つのフローが一つにまとめられ「次の処理へ」は１回だけ実行されます。
`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="発話のキャンセル" data={data} />
  }
}
