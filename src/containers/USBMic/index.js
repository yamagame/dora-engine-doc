import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
VoiceKitのマイクではなく、USBマイクにする場合は、環境変数 ROBOT_USB_MIC_DEVICE にデバイスを指定します。
下記は例です。

~
ROBOT_USB_MIC_DEVICE=plughw:1,0
~

`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="USBマイク対応" data={data} />
  }
}
