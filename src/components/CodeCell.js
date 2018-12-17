import React, { Component } from 'react';

export default function({ children, data, })
{
  return (
    <div style={{
      marginLeft: '1em',
      padding: 10,
      border: 'solid 1px lightgray',
      fontSize: '0.8em',
    }}>
      <pre>
        <code>
          { data }
          { children }
        </code>
      </pre>
    </div>
  )
}
