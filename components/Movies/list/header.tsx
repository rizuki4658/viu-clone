
import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'

import {
  MovieTitle,
} from '../../../types'

const LinkAll: React.FC<{
  show?: boolean,
  link: string,
  text: string }> = ({...props}) => {
  const nodeHeaderRefLinkAll = useRef(null)

  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      nodeRef={nodeHeaderRefLinkAll}
      unmountOnExit
      appear
      classNames="fade">
      <div ref={nodeHeaderRefLinkAll}>
        <Link
          href={props.link}>
          <a
            className="text-xs font-bold leading-none bg-gray-500 bg-opacity-20 hover:text-yellow-500 rounded-full px-2.5 py-1.5">
            {props.text}
          </a>
        </Link>
      </div>
    </CSSTransition>
  )
}

const HeaderList: React.FC<MovieTitle> = (props) => {
  return (
    <div className="flex items-center justify-between gap-x-6 py-3">
      <h2 className="text-xl">
        <Link
          href={props.link}>
          <a
            className="hover:text-yellow-500 cbold">
            {props.name}
          </a>
        </Link>
      </h2>
      <LinkAll
        show={props.showLink}
        text={props.allText}
        link={props.name}
      />
    </div>
  )
}

export default HeaderList
