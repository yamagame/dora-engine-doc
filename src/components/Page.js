import React, { Component } from 'react';
import MathJax from './MathJax';
import Link, { H3Link, H4Link, } from './Link';
import { Link as RouterLink } from 'react-router-dom';
import PageCell from './PageCell';

export default class Page extends Component {
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
    const {
      category,
      subcategory,
      pageDivide,
    } = this.props;
    const pageHeaderStyle = {}
    if (pageDivide) {
      pageHeaderStyle.pageBreakBefore = 'always';
    }
    return (
      <div>
        {
          (this.props.title) ? <div
            className="Page-header"
            style={pageHeaderStyle}
          >
            <p className="Page-title" style={{ flex: 'auto' }}>{ this.props.title }</p>
            {
              (this.props.maxPage>0)?<p className="Page-Number" style={{ flex: 'auto' }}>{ this.props.page } / { this.props.maxPage }</p>:null
            }
          </div> : null
        }
        <div className="Page-body">
          <PageCell
            category={category}
            subcategory={subcategory}
            pageDivide={pageDivide}
            data={this.props.data}
          >
            { this.props.children }
          </PageCell>
        </div>
      </div>
    );
  }
}

Page.defaultProps = {
  title: '',
  page: 0,
  maxPage: 0,
  data: '',
  category: '',
  subcategory: '',
  pageDivide: true,
}
