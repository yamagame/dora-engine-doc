import React, { Component } from 'react';

export default class DocBody extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    if (this.props.pages.length > 0) {
      return this.props.pages[this.props.page].page({
        pageInfo: {
          page: this.props.page+1,
          maxPage: this.props.maxPage,
          title: this.props.title,
        },
      })
    } else {
      return <div></div>
    }
  }
}

DocBody.defaultProps = {
  page: 0,
  pages: [],
  maxPage: 0,
}
