import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
翻訳に Google Translation API を使用しています。

#準備
下記URLのページの「Google Translation APIの準備」を参照して設定します。

&&[https://github.com/yamagame/dora-engine]https://github.com/yamagame/dora-engine

#翻訳コマンド

下記シナリオは翻訳コマンドのサンプルです。例では日本語から英語に翻訳します。

~
/.payload/こんにちは
/translate/ja/en
/log/{{payload}}
~

言語コードについては以下のページを参照してください。

&&[https://cloud.google.com/translate/docs/languages]https://cloud.google.com/translate/docs/languages

#料金
Google Translation APIの料金については次のページを参照してください。使用している Traslation API は v3 です。

&&[https://cloud.google.com/translate/pricing]https://cloud.google.com/translate/pricing
`

export default class Translation extends Component {
  render() {
    return <PageContainer title="翻訳" data={data} />
  }
}
