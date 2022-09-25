import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import {CaretDown, CaretUp } from '../../../../Icons'

const Profile: React.FC<{ mobile?: boolean, logged?: boolean }> = ({...props}) => {
  const [state, setState] = useState({
    collapse: false
  })
  const nodeProfileMenu = useRef(null)
  const handleCollapse = () => {
    setState(() => ({ collapse: !state.collapse }))
  }
  const iconCaret = () => {
    if (state.collapse) return <CaretUp />
    return <CaretDown />
  }

  if (props.mobile && props.logged) {
    return (
      <div>
        <div className="pt-4 pb-2">
          <div className="h-12 w-12 bg-gray-300 rounded-full" />  
        </div>
        <button
          className="flex w-full justify-between items-center"
          onClick={handleCollapse}>
          <span className="text-gray-800 text-sm cbold uppercase">
            John Doe
          </span>
          <span className="text-gray-800 cbold">
            {iconCaret()}
          </span>
        </button>
        <CSSTransition
          in={state.collapse}
          nodeRef={nodeProfileMenu}
          timeout={200}
          classNames="collapse"
          appear
          unmountOnExit>
          <ul
            ref={nodeProfileMenu}
            className="text-gray-800 mt-6">
            <li className="mb-6">
              <Link href={'/'}>Go Premium</Link>
            </li>
            <li className="mb-6">
              <Link href={'/'}>My Account</Link>
            </li>
            <li className="mb-6">
              <Link href={'/'}>Sign Out</Link>
            </li>
          </ul>    
        </CSSTransition>
        <div className="border-b border-gray-200 my-6" />
      </div>
    )
  } else if (props.mobile && !props.logged) {
    return (
      <div>
        <div className="pt-4 pb-2">
          <div className="h-12 w-12 bg-gray-300 rounded-full" />  
        </div>
        <button
          className="flex w-full justify-between items-center"
          onClick={handleCollapse}>
          <span className="text-gray-800 text-sm cbold uppercase">
            Sign in / Sign Up
          </span>
        </button>
        <div className="border-b border-gray-200 my-6" />
      </div>
    )
  }
  return <ul className="mb-6"></ul>
}

export default Profile
