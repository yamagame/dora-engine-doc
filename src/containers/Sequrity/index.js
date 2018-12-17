import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

import Page000 from './Page000';

const pages = [
  { page: Page000, title: '概要', },
]

export default class Sequrity extends Component {
  render() {
    return <PageContainer title="セキュリティについて" pages={pages} />
  }
}
