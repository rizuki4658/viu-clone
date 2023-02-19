import React, { createRef } from 'react'
import { CardMovieItem } from '../../../types'

class CardMovie extends React.Component<CardMovieItem> {
  constructor(props: CardMovieItem) {
    super(props)
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.img})`
        }}
        className={[
          'h-full',
          'bg-cover',
          'rounded-md',
          'bg-no-repeat',
          'cursor-pointer'
        ].join(' ')}>
        <div
          className={[
            'h-full',
            'w-full',
            'bg-black',
            'rounded-md',
            'bg-opacity-0',
            'hover:bg-opacity-60',
          ].join(' ')}
        />
      </div>
    )
  }
}

export default CardMovie
