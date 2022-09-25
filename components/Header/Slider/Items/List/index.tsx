import React from 'react'
import Link from 'next/link'
import { Menus, Menu } from '../../../../../types'

const List: React.FC<{ items: Menus }> = ({...props}) => {
  const items = props.items.map((item: Menu, key: number) => {
    return (
      <li key={key} className="text-gray-800 text-lg mb-6">
        <Link href={item.link}>{item.name}</Link>
      </li>
    )
  })
  return (
    <ul className="border-b border-gray-200 mb-6">
      {items}
    </ul>
  )
}

export default List
