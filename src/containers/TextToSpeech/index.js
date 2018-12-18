import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
`

export default class TextToSpeech extends Component {
  render() {
    return <PageContainer title="Google Text-To-Speech" data={data} />
  }
}
