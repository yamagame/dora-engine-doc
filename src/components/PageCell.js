import React, { Component } from 'react';
import MathJax from './MathJax';
import Link, { H3Link, H4Link, } from './Link';
import { Link as RouterLink } from 'react-router-dom';

export default class PageCell extends Component {
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
        { this.props.data.split('\n').map( (v,i) => {
            const t = v.trim().match('([#&\$\!/~]*)(.+)');
            if (t) {
              if (t[1] == '!') {
                return (
                  <h4 style={{ paddingLeft: '1em', }} key={i}>
                    <MathJax value={t[2].trim()} />
                  </h4>
                )
              } else
              if (t[1] == '!!') {
                return (
                  <p key={i}>
                    <MathJax style={{paddingLeft: '1em'}} value={t[2].trim()} />
                  </p>
                )
              } else
              if (t[1] == '#') {
                return (
                  <H3Link target={t[2].trim()} category={category} subcategory={subcategory} key={i}>
                    <MathJax style={{display: 'inline'}} value={t[2].trim()} />
                  </H3Link>
                )
              } else
              if (t[1] == '##') {
                return (
                  <H4Link style={{paddingLeft: '1em'}} target={t[2].trim()} category={category} subcategory={subcategory} key={i}>
                    <MathJax style={{display: 'inline'}} value={t[2].trim()} />
                  </H4Link>
                )
              } else
              if (t[1][0] == '$') {
                return <MathJax value={v} key={i} />
              } else
              if (t[1][0] == '/') {
                return null;
              } else
              if (t[1] == '&') {
                const q = v.match('(&+)\\[(.+)\\](.+)')
                return (
                  <p style={{paddingLeft: '1em'}} key={i}>
                    <RouterLink to={`${q[3].trim()}`}>{q[2]}</RouterLink>
                  </p>
                )
                // return <p><a href={`${q[3].trim()}`} >{q[2]}</a></p>
              } else
              if (t[1] == '&&') {
                const q = v.match('(&+)\\[(.+)\\](.+)')
                return (
                  <p style={{paddingLeft: '1em'}} key={i}>
                    <a target={encodeURIComponent(q[2])} href={`${q[3].trim()}`}>{q[2]}</a>
                  </p>
                )
              } else
              if (v.trim() == '~~') {
                return <div className="page-divide" key={i}></div>
              } else
              if (v.trim() == '--') {
                return <hr key={i}/>
              } else
              if (t[1] == '~') {
                const q = t[2].trim().split('、');
                return (
                  <p style={{paddingLeft: '1em'}} key={i}>
                    {
                      q.map( (v,i) => (
                        <span key={i}>
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
                  <p key={i}>
                    {
                      q.map( (v,i) => (
                        <span style={{ paddingLeft: '1em' }} key={i}>
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
        { this.props.children }
      </div>
    );
  }
}

PageCell.defaultProps = {
  page: 0,
  maxPage: 0,
  data: '',
  category: '',
  subcategory: '',
  pageDivide: true,
}
