import React, { Component } from 'react';
import PageHeader from './PageHeader';
import MarkCell from './MarkCell';

export default function({ pages, category='', title='', data='', }) {
  return (
    <div>
      <div className="App">
        <PageHeader>{title}</PageHeader>
      </div>
      {
        (data) ? <MarkCell data={data} /> : null
      }
      {
        (pages) ? pages.map( (v, i) => {
          return v.page({
            pageInfo: {
              title: v.title,
              page: i+1,
              maxPage: pages.length,
              category,
            },
          })
        }) : null
      }
      <div style={{ height: 100 }}></div>
    </div>
  )
}
