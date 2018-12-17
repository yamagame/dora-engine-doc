import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

import Page000 from './Page000';

const pages = [
  { page: Page000, title: '概要', },
]

export default class MICSensitivity extends Component {
  render() {
    return <PageContainer title="マイク感度調整" pages={pages} />
  }
}
