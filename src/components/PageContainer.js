import React, { Component } from 'react';

export default function({ pages, category='', }) {
  return (
    <div>
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
