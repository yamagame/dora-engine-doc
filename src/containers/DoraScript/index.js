import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
専用のスクリプト言語を使ってロボットをコントロールすることができます。

$ /image/scenario-editor.png

スクリプトはシナリオエディターで編集できます。

# スクリプトの仕組み
スクリプトは１行１オブジェクトになっています。スクリプトは上から順に実行されメッセージオブジェクトが受け渡されていきます。
メッセージの流れのことをフローと呼んでいます。
メッセージオブジェクトは値を追加したり変更したりできます。メッセージオブジェクトの中身を変更する場合は以下のようなコマンドを実行します。

~
/.payload/HELLO
~

このコマンドを実行すると、payloadにHELLOという文字列が代入されます。

~
/.bar.title/ロボット
~

この様にすると、bar.titleにロボットが代入されます。オブジェクトが存在する場合は上書きされますが、存在しない場合は自動的に作成されます。
オブジェクトの中身を確認するときは、/logコマンドを使用します。

/log

この様にするとブラウザのコンソールにメッセージオブジェクト全体が出力されます。

/log/{{payload}}

この様にするとメッセージオブジェクトのpayloadのみがブラウザのコンソールに出力されます。

フローが異なると異なるメッセージオブジェクトになります。
実行時直後のメッセージオブジェクトは以下の様になっています。

~
{
  //内部で使用しますので触らないでください。
  callstack: [],
  //ロボットのホスト名とポート番号です。
  dora: {
    host: "localhost",
    port: 3090
  },
  //ロボットのIPアドレスです。
  ip_address: "127.0.0.1",
  //スクリプトを実行したユーザー名です。
  username: "yamagame",
  //音声認識のパラメータです。
  voice: {
    sensitivity: 4573,
    level 70
  }
}
~
`

export default class DoraScript extends Component {
  render() {
    return <PageContainer title="ドラスクリプト" data={data} />
  }
}
