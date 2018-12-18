import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
`

export default class SpeechToText extends Component {
  render() {
    return <PageContainer title="Google Speech-To-Text" data={data} />
  }
}
