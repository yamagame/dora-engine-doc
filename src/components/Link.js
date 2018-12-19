import React, { Component } from 'react';

export default function({children, category, subcategory}) {
  const w = encodeURIComponent(children);
  const c = encodeURIComponent(category);
  const s = encodeURIComponent(subcategory);
  let q = w;
  if (category !== '' && typeof category !== 'undefined') {
    q += `+${c}`;
  }
  if (subcategory !== '' && typeof subcategory !== 'undefined') {
    q += `+${s}`;
  }
  return <a target={encodeURIComponent(children)} href={`https://www.google.com/search?q=${q}`}>{children}</a>
}

export const H3Link = function({target, children, category, subcategory}) {
  const w = encodeURIComponent(target);
  const c = encodeURIComponent(category);
  const s = encodeURIComponent(subcategory);
  let q = w;
  if (category !== '' && typeof category !== 'undefined') {
    q += `+${c}`;
  }
  if (subcategory !== '' && typeof subcategory !== 'undefined') {
    q += `+${s}`;
  }
  return <h3>□ <a target={encodeURIComponent(target)} href={`https://www.google.com/search?q=${q}`}>{children}</a></h3>
}

export const H4Link = function({target, children, category, subcategory}) {
  const w = encodeURIComponent(target);
  const c = encodeURIComponent(category);
  const s = encodeURIComponent(subcategory);
  let q = w;
  if (category !== '' && typeof category !== 'undefined') {
    q += `+${c}`;
  }
  if (subcategory !== '' && typeof subcategory !== 'undefined') {
    q += `+${s}`;
  }
  return <h4><a target={encodeURIComponent(target)} href={`https://www.google.com/search?q=${q}`}>{children}</a></h4>
}
