import React from 'react'
import Search from './Search'
import Login from './Login'

const SearchLogin: React.FC<{ mobile?: boolean }> = ({...props}) => {
  return (
    <div className="flex lg:flex-1 items-center justify-end gap-x-4">
      <Search />
      <Login mobile={props.mobile} />
    </div>
  )
}

export default SearchLogin
