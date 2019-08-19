import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
スライド画面に選択肢を表示して対話型のアプリケーションを作ることができます。

$ /image/quiz/001.png

下記のシナリオは選択肢の表示と選択後チェックを行うサンプルです。

~
/quiz.speech
/quiz.init/クイズ
/select/晩御飯のおかずに最適なものはどれ？
/ok/ポテトサラダ
/ng/スパゲッティ
/ng/アイスクリーム
/ng/パイナップル
/quiz.open/no-time
/quiz.wait
晩御飯のおかずに最適なものはどれ？
/wait-event/:例外
/.payload/{{speechText}}
/quiz.speech/{{payload}}
/fork/:正解チェック
:正解チェック
/check/ポテト
/check/サラダ
/joinAll/:不正解
:正解

その通り。

/goto/:解説

:例外
/goto/:不正解

:不正解

残念、不正解です。

:解説

晩御飯に最適なおかずは、ポテトサラダでした。
~

上記サンプルの「/wait-event」を「/speech-to-text」に変更すると、音声認識に対応することができます。
`

export default class Quiz extends Component {
  render() {
    return <PageContainer title="クイズ" data={data} />
  }
}
