import React from 'react'

import MovieList from './list'

class Movies extends React.Component {
  render () {
    return (
      <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
        <MovieList
          title={
            {
              name: 'Viu Top Watched',
              link: '',
              allText: 'View All',
              allLink: ''
            }
          }
          items={[]}
        />
      </div>
    )
  }
}

export default Movies
