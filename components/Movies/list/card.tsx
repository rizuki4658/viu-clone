import React from 'react'
import { MovieItem } from '../../../types'

class Card extends React.Component<MovieItem> {
  constructor(props: MovieItem) {
    super(props)
  }

  render() {
    return (
      <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20 relative">
        { this.props.img }
        { this.props.name }
        { this.props.desc }
      </div>
    )
  }
}

export default Card
