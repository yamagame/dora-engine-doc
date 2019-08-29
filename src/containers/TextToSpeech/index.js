import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
Google の Text-to-Speech API を使って音声合成することができます。

# 準備

以下のページに従ってAPIを有効にし、環境変数 GOOGLE_APPLICATION_CREDENTIALS を設定します。

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
/.speech.languageCode/en-US
/.speech.name/en-US-Wavenet-C
Hello
~

言語コードについては次のページを参照してください。

&&[https://cloud.google.com/text-to-speech/docs/voices]https://cloud.google.com/text-to-speech/docs/voices

# キャッシュ

音声はキャッシュされます。キャッシュサイズは環境変数 ROBOT_GOOGLE_SPEECH_CACHE_SIZE で指定できます。初期値は300MByteです。
キャッシュファイルの場所は初期状態では以下の場所です。

~
/tmp
~

環境変数 ROBOT_GOOGLE_SPEECH_DATA_DIR でキャッシュファイルの保存先を変更できます。

# Speech-to-Text と両立させる

環境変数 GOOGLE_APPLICATION_CREDENTIALS を設定すると、Speech-to-Text もこのプロジェクトに置き換わります。
Speech-to-Text を有効にするには、GOOGLE_APPLICATION_CREDENTIALS で指定したプロジェクトの Cloud Speech API を有効にしないと機能しません。

Google Cloud Platfrom のコンソールからプロジェクトのダッシュボードに移動して、「APIの概要に移動」をクリック。
「APIとサービスの有効化」をクリックして「Cloud Speech API」を探して有効化してください。

$ /image/dashboard.png

#料金
Google Text-to-Speech APIの料金については次のページを参照してください。

&&[https://cloud.google.com/text-to-speech/pricing]https://cloud.google.com/text-to-speech/pricing
`

export default class TextToSpeech extends Component {
  render() {
    return <PageContainer title="Google Text-To-Speech" data={data} />
  }
}
