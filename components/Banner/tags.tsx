import React, { useState } from 'react'

const BannerTags: React.FC<{ tags: string[] }> = ({...props}) => {
  const [ state ] = useState({
    container: [
      'space-x-1 flex',
      'flex-wrap',
      'items-center'
    ],
    tag: [
      'bg-gray-600',
      'bg-opacity-60',
      'inline-block',
      'cursor-default',
      'md:text-base',
      'capitalize',
      'text-sm font-bold',
      'px-2 py-1 rounded-lg'
    ]
  })

  if (!props.tags.length) return<></>

  return (
    <div
      className={state.container.join(' ')}>{
      props.tags.map((tag: string, key: number) => (
        <button
          key={key}
          className={state.tag.join(' ')}>
          {tag}
        </button>
      ))
    }</div>
  )
}

export default BannerTags
