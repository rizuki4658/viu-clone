import React, { useEffect, useState } from 'react'

import MovieList from './list'

const Movies: React.FC<{ items: any[] }> = ({...props}) => {
  const [ state, setState ] = useState({
    items: []
  })

  const stateSetter = (key: string, value: any) => {
    setState((state) => ({
      ...state,
      [key]: value
    }))
  }

  useEffect(() => {
    stateSetter('items', props.items)
  }, [props.items])

  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-4 xl:mx-auto">
      <MovieList items={state.items} />
    </div>
  )
}

export default Movies
