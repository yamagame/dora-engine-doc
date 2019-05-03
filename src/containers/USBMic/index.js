import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
VoiceKitのマイクではなく、USBマイクにする場合は、環境変数 ROBOT_USB_MIC_DEVICE にデバイスを指定します。

~
ROBOT_USB_MIC_DEVICE=plughw:1,0
~

下記は実行例です。

~
ROBOT_USB_MIC_DEVICE=plughw:1,0 node robot-server.js
~

`

export default class USBMic extends Component {
  render() {
    return <PageContainer title="USBマイク対応" data={data} />
  }
}
