import React from 'react'
import Link from 'next/link'
import { menus } from '../../../constants/navigation'

const Items = () => {
  const items = menus.map((item, key) => {
    return (
      <li key={key}>
        <Link href={item.link}>
          {item.name}
        </Link>
      </li>
    )
  })
 
  return (
    <ul
      className={[
        'md:flex hidden items-center gap-x-3'
      ]}>
      {items}
    </ul>
  )
}

const Navigation = () => {
  return (<Items />)
}

export default Navigation
