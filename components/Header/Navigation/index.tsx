import React from 'react'
import Link from 'next/link'
import { menus } from '../../../constants/navigation'

const Items: React.FC<{}> = () => {
  const items = menus.map((item, key) => {
    return (
      <li key={key}>
        <Link href={item.link}>
          <a className="cbold text-sm">{item.name}</a>
        </Link>
      </li>
    )
  })
 
  return (
    <ul className="lg:flex hidden items-center gap-x-4">
      {items}
    </ul>
  )
}

const Navigation: React.FC<{ mobile?: boolean }> = ({...props}) => {
  if (!props.mobile) return (<Items />)

  return <></>
}

export default Navigation
