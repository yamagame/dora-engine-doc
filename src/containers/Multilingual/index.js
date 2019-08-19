import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
Google Speech-to-Text / Text-to-Speech や AWS Polly の設定を行うと多言語に対応することができます。

# 多言語認識

音声認識はデフォルトでは日本語が設定されています。シナリオで設定を変更することで多言語に対応できます。

音声認識を多言語で行うにはメッセージオブジェクトの .voice.languageCodeに言語コードを設定します。言語コードは下記ページを参照。

&[Google Speech-to-Text 言語対応]https://cloud.google.com/speech-to-text/docs/languages?hl=ja

以下例です。

~
//英語
/.voice.languageCode/en-US
/speech-to-text
~

~
//日本語
/.voice.languageCode/ja-JP
/speech-to-text
~

~
//中国語
/.voice.languageCode/cmn-Hans-CN
/speech-to-text
~

~
//韓国語
/.voice.languageCode/ko-KR
/speech-to-text
~

# 多言語発声

以下は多言語発声のサンプルです。このシナリオを実行すると、マイクに向かって「英語」と言えば「Hello. I'm cardboard robot.」と、「フランス語」と言えば「Bonjour, je suis un robot en carton.」と発話します。

~
:TOP
/led.blink
/wait-event
/led.off
/sound.sync/Pop.wav
/.speech.languageCode/default
みなさま、初めまして
私はダンボール頭のおしゃべりロボです。
/goto/:WAIT

:LOOP
/sound.sync/Pop.wav
/led.auto
/speech-to-text
/switch/canceled/:WAIT
/switch/timeout/:LOOP
/if/英語/:英語
/if/韓国語/:韓国語
/if/中国語/:中国語
/if/フランス語/:フランス語
/if/ドイツ語/:ドイツ語
/if/日本語/:日本語
/sound.sync/Pop.wav
/chat
/.speech.languageCode/default
/text-to-speech
/goto/:LOOP

:WAIT
/led.blink
/sound.sync/Pop.wav
/wait-event
/led.off
/goto/:LOOP

:英語
/sound/Pop.wav
/.speech.gender/FEMALE
/.speech.languageCode/en-US
Hello. I'm cardboard robot.
/goto/:LOOP

:日本語
/sound.sync/Pop.wav
/.speech.languageCode/default
こんにちは。私はダンボールロボットです。
/goto/:LOOP

:フランス語
/sound.sync/Pop.wav
/.speech.languageCode/fr-FR
Bonjour, je suis un robot en carton.
/goto/:LOOP

:ドイツ語
/sound.sync/Pop.wav
/.speech.gender/FEMALE
/.speech.languageCode/de-DE
Hallo, ich bin Kartonroboter.
/goto/:LOOP

:韓国語
/sound.sync/Pop.wav
/.speech.gender/FEMALE
/.speech.languageCode/ko-KR
여보세요. 나는 골판지 로봇이야.
/goto/:LOOP

:中国語
/sound.sync/Pop.wav
/.speech.languageCode/aws.cmn-CN
你好。我是紙板機器人。
/goto/:LOOP
~
`

export default class MICSensitivity extends Component {
  render() {
    return <PageContainer title="多言語化" data={data} />
  }
}
