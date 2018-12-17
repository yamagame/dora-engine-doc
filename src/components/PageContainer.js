import React, { Component } from 'react';
import PageHeader from './PageHeader';

export default function({ pages, category='', title='', }) {
  return (
    <div>
      <div className="App">
        <PageHeader>{title}</PageHeader>
      </div>
      {
        pages.map( (v, i) => {
          return v.page({
            pageInfo: {
              title: v.title,
              page: i+1,
              maxPage: pages.length,
              category,
            },
          })
        })
      }
    </div>
  )
}
