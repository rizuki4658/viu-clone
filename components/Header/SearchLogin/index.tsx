import React from 'react'
import { Search as IconSearch } from '../../Icons'

const Login: React.FC<{ mobile?: boolean }> = ({...props}) => {
  if (!props.mobile) {
    return (
      <button
        type="button"
        className="px-6 py-3 text-sm bg-white bg-opacity-30 rounded-full hover:bg-yellow-500 hover:text-black">
        Sign in / Sign Up
      </button>
    )
  }

  return <></>
}

const SearchLogin: React.FC<{ mobile?: boolean }> = ({...props}) => {
  return (
    <div className="flex lg:flex-1 items-center justify-end gap-x-4">
      <button
        type="button"
        className="flex items-center cbold gap-x-1">
        <span className="text-sm">Search</span>
        <IconSearch />
      </button>
      <Login mobile={props.mobile} />
    </div>
  )
}

export default SearchLogin
