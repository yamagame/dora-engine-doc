import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
`

export default class Quiz extends Component {
  render() {
    return <PageContainer title="クイズ" data={data} />
  }
}
