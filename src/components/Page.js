import React, { Component } from 'react';
import MathJax from './MathJax';
import Link, { H3Link, H4Link, } from './Link';
import { Link as RouterLink } from 'react-router-dom';

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
        <div
          className="Page-header"
          style={pageHeaderStyle}
        >
          <p className="Page-title" style={{ flex: 'auto' }}>{ this.props.title }</p>
          {
            (this.props.maxPage>0)?<p className="Page-Number" style={{ flex: 'auto' }}>{ this.props.page } / { this.props.maxPage }</p>:null
          }
        </div>
        <div className="Page-body">
          { this.props.children }
          { this.props.data.split('\n').map( v => {
              const t = v.trim().match('([#&\$\!/~]*)(.+)');
              if (t) {
                if (t[1] == '!') {
                  return (
                    <h4 style={{ paddingLeft: '1em', }} >
                      <MathJax value={t[2].trim()} />
                    </h4>
                  )
                } else
                if (t[1] == '!!') {
                  return (
                    <p>
                      <MathJax style={{paddingLeft: '1em'}} value={t[2].trim()} />
                    </p>
                  )
                } else
                if (t[1] == '#') {
                  return (
                    <H3Link target={t[2].trim()} category={category} subcategory={subcategory}>
                      <MathJax style={{display: 'inline'}} value={t[2].trim()} />
                    </H3Link>
                  )
                } else
                if (t[1] == '##') {
                  return (
                    <H4Link style={{paddingLeft: '1em'}} target={t[2].trim()} category={category} subcategory={subcategory}>
                      <MathJax style={{display: 'inline'}} value={t[2].trim()} />
                    </H4Link>
                  )
                } else
                if (t[1][0] == '$') {
                  return <MathJax value={v} />
                } else
                if (t[1][0] == '/') {
                  return null;
                } else
                if (t[1] == '&') {
                  const q = v.match('(&+)\\[(.+)\\](.+)')
                  return (
                    <p>
                      <RouterLink to={`${q[3].trim()}`}>{q[2]}</RouterLink>
                    </p>
                  )
                  // return <p><a href={`${q[3].trim()}`} >{q[2]}</a></p>
                } else
                if (v.trim() == '~~') {
                  return <div className="page-divide"></div>
                } else
                if (v.trim() == '--') {
                  return <hr/>
                } else
                if (t[1] == '~') {
                  const q = t[2].trim().split('、');
                  return (
                    <p style={{paddingLeft: '1em'}}>
                      {
                        q.map( (v,i) => (
                          <span>
                            <Link category={category} subcategory={subcategory}>
                              {v}
                            </Link>
                            {(i<q.length-1)?'、':''}
                          </span>
                        ))
                      }
                    </p>
                  )
                } else {
                  const q = t[2].trim().split('、');
                  return (
                    <p>
                      {
                        q.map( (v,i) => (
                          <span style={{ paddingLeft: '1em' }}>
                            <Link category={category} subcategory={subcategory}>
                              {v}
                            </Link>
                            {(i<q.length-1)?'、':''}
                          </span>
                        ))
                      }
                    </p>
                  )
                }
              }
              return null;
            })
          }
        </div>
      </div>
    );
  }
}

Page.defaultProps = {
  title: 'title',
  page: 0,
  maxPage: 0,
  data: '',
  category: '',
  subcategory: '',
  pageDivide: true,
}
