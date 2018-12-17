import React, { Component } from 'react';
import Page from '../../components/Page';
import PageCell from '../../components/PageCell';
import CodeCell from '../../components/CodeCell';
import ImageCell from '../../components/ImageCell';
import MathJax from '../../components/MathJax';
import Link from '../../components/Link';

const data0 = `
Spreadsheet

/.googleSheetId/[SheetID]
/append-to-google-sheet/こんにちは

`

export default function({ pageInfo }) {
  return (
    <Page
      title={pageInfo.title}
      page={pageInfo.page}
      maxPage={pageInfo.maxPage}
      pageDivide={false}
    >
    </Page>
  )
}
