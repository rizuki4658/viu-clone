import React, { createRef } from 'react'
import { CardMovieItem } from '../../../types'

class CardMovie extends React.Component<CardMovieItem> {
  constructor(props: CardMovieItem) {
    super(props)
  }

  render() {
    return (
      <div
        className="bg-blue-500 rounded-md h-full">
        { this.props.img }
        { this.props.name }
        { this.props.desc }
      </div>
    )
  }
}

export default CardMovie
