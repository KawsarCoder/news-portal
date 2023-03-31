import React, { Component } from 'react'
import NewsItems from '../NewsItems/NewsItems'

export class News extends Component {
  render() {
    return (
      <div>
            This is news component
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
      </div>
    )
  }
}

export default News
