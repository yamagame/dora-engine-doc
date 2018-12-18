import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
`

export default class Password extends Component {
  render() {
    return <PageContainer title="管理者パスワードの設定" data={data} />
  }
}
