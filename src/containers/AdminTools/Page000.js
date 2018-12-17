import React, { Component } from 'react';
import Page from '../../components/Page';
import PageCell from '../../components/PageCell';
import CodeCell from '../../components/CodeCell';
import ImageCell from '../../components/ImageCell';
import MathJax from '../../components/MathJax';
import Link from '../../components/Link';

export default function({ pageInfo }) {
  return (
    <Page
      page={pageInfo.page}
      maxPage={pageInfo.maxPage}
      pageDivide={false}
      title={pageInfo.title}
    >
    </Page>
  )
}
