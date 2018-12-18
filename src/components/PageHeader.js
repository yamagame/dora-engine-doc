import React, { Component } from 'react';

export default function({children, style}) {
  return (
    <header className="Page-header" style={{ backgroundColor: '#F4F4F4', ...style }}>
      {/* <button className="App-header-button" onClick={this.goPrev}>前のページ</button> */}
      <h3 className={["Page-header-col"].join(' ')}>□ {children}</h3>
      {/* <button className="App-header-button" onClick={this.goNext}>次のページ</button> */}
    </header>
  )
}
