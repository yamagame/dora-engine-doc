import React, { Component } from 'react';

export default function({ src })
{
  return (
    <p align="center">
      <img src={`${process.env.PUBLIC_URL}${src}`} />
    </p>
  )
}
