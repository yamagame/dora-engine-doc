import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
音声認識に Google Speech-to-Text API を使用しています。

#準備
下記URLのページの「Google Speech APIの準備」を参照して設定します。

&&[https://github.com/yamagame/dora-engine]https://github.com/yamagame/dora-engine

#料金
Google Speech-to-Text APIの料金については次のページを参照してください。

&&[https://cloud.google.com/speech-to-text/pricing]https://cloud.google.com/speech-to-text/pricing
`

export default class SpeechToText extends Component {
  render() {
    return <PageContainer title="Google Speech-to-Text" data={data} />
  }
}
