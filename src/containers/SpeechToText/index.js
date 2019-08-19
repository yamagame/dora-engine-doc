import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
音声認識に Google Speech-to-Text API を使用しています。

#準備
下記URLのページの「Google Speech APIの準備」を参照して設定します。

&&[https://github.com/yamagame/dora-engine]https://github.com/yamagame/dora-engine

# 音声認識コマンド

下記シナリオは音声認識のサンプルです。「こんにちは」と認識すれば「こんにちは」としゃべります。「こんばんは」と認識すれば「こんばんは」としゃべります。それ以外なら「なるほどなるほど」と喋ります。

~
/.timeout/30000
/speech-to-text/:例外
/.payload/{{speechText}}
/if/こんにちは/:こんにちは
/if/こんばんは/:こんばんは
なるほど、なるほど
/end

:こんにちは
こんにちは
/end

:こんばんは
こんばんは
/end

:例外
/switch/canceled/:キャンセル
タイムアウトしました
/end

:キャンセル
キャンセルしました
/end
~

音声認識は連続的に認識できる時間が最大60秒までです。例ではタイムアウトを30秒に設定しています。なにも認識せずに30秒過ぎるとタイムアウトします。音声認識せずにお腹のボタンを押下するとキャンセルします。

#料金
Google Speech-to-Text APIの料金については次のページを参照してください。

&&[https://cloud.google.com/speech-to-text/pricing]https://cloud.google.com/speech-to-text/pricing
`

export default class SpeechToText extends Component {
  render() {
    return <PageContainer title="Google Speech-to-Text" data={data} />
  }
}
