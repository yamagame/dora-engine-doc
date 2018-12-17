import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

import Page000 from './Page000';

const pages = [
  { page: Page000, title: '概要', },
]

export default class AdminTools extends Component {
  render() {
    return <PageContainer title="管理者ツール" pages={pages} />
  }
}
