import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
正常に終了させずに電源を切るとmicroSDカードが破損することがあります。
ドラエンジンではお腹のボタンを長押し(10秒)することで電源を切ることができます。
`

export default class Quiz extends Component {
  render() {
    return <PageContainer title="電源を切る" data={data} />
  }
}
