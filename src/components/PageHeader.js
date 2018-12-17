import React, { Component } from 'react';

export default function({children}) {
  return (
    <header className="Page-header">
      {/* <button className="App-header-button" onClick={this.goPrev}>前のページ</button> */}
      <p className={["App-title","App-header-col"].join(' ')}>{children}</p>
      {/* <button className="App-header-button" onClick={this.goNext}>次のページ</button> */}
    </header>
  )
}
