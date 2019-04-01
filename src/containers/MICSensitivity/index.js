import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
下記URLのページを使ってマイク感度の調整ができます。

~
http://[ロボットのIPアドレス]:3090/wave-analyzer
~

$ /image/wave-analyzer.png

赤い線と緑の線はマウスでドラッグすると上下に移動できます。

緑の線は音声入力の判断基準となるラインです。これを超える音を入力音声とします。

赤い線は音声のレベルです。上に移動すると音が大きくなります。下に移動すると小さくなります。
`

export default class MICSensitivity extends Component {
  render() {
    return <PageContainer title="マイク感度調整" data={data} />
  }
}
