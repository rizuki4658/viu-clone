import React, { useRef } from 'react'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import { Apple, GooglePlay } from '../../../Icons'
import { menusSide } from '../../../../constants/navigation'
import { Menus, Menu } from '../../../../types'

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

const Items: React.FC<{ open: boolean }> = ({...props}) => {
  const nodeItemsSlider = useRef(null)

  return (
    <CSSTransition
      in={props.open}
      timeout={1000}
      nodeRef={nodeItemsSlider}
      classNames="slide-left"
      appear
      unmountOnExit>
      <div
        ref={nodeItemsSlider}
        className="fixed lg:top-16 lg:left-8 lg:bottom-4 left-0 top-0 bottom-0">
        <div
          className="menu-slider-items inline-block h-full overflow-y-auto bg-white w-72 lg:rounded-2xl px-4 lg:pl-8 lg:pr-6 pb-4">
          <List items={menusSide.top} />
          <List items={menusSide.bottom} />
          <ul className="border-b border-gray-200 mb-6">
            <li className="text-sm text-gray-400 mb-4">
              DOWNLOAD VIU APP
            </li>
            <li className="text-gray-800 mb-2">
              <Link href={'/'}>
                <a className="flex items-center gap-x-4">
                  <span><GooglePlay /></span>
                  <span className="text-lg">Google Play</span>
                </a>
              </Link>
            </li>
            <li className="text-gray-800 mb-6">
              <Link href={'/'}>
                <a className="flex items-center gap-x-4">
                  <span className="text-xl"><Apple /></span>
                  <span className="text-lg">App Store</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Items