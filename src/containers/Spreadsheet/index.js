import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
`

export default class Spreadsheet extends Component {
  render() {
    return <PageContainer title="Google スプレッドシート" data={data} />
  }
}
