import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
Google の Text-to-Speech API を使って音声合成することができます。

# 準備

以下のページにしたがってAPIを有効にし、説明にしたがって環境変数GOOGLE_APPLICATION_CREDENTIALSを設定します。

&&[https://cloud.google.com/text-to-speech/docs/quickstart-client-libraries]https://cloud.google.com/text-to-speech/docs/quickstart-client-libraries

# 発話コマンド

言語コードを指定して実行します。音声はダウンロードして発話しますので発話までは少し間があります。

~
/.speech.languageCode/ja-JP
こんにちは
~

元に戻すときは次の様にします。

~
/.speech.languageCode/
こんにちは
~

音声名を使って指定することもできます。

~
/.speech.name/en-US-Wavenet-C
こんにちは
~

言語コードについては次のページを参照してください。

&&[https://cloud.google.com/text-to-speech/docs/voices]https://cloud.google.com/text-to-speech/docs/voices

# キャッシュ

音声はキャッシュされます。キャッシュサイズは環境変数ROBOT_GOOGLE_SPEECH_CACHE_SIZEで指定できます。初期値は300MByteです。

#料金
Google Text-to-Speech APIの料金については次のページを参照してください。

&&[https://cloud.google.com/text-to-speech/pricing]https://cloud.google.com/text-to-speech/pricing
`

export default class TextToSpeech extends Component {
  render() {
    return <PageContainer title="Google Text-To-Speech" data={data} />
  }
}
