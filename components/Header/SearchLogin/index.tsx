import React from 'react'
import { Search as IconSearch } from '../../Icons'

const Login: React.FC<{ mobile?: boolean }> = ({...props}) => {
  if (!props.mobile) {
    return (
      <div>Button Login</div>
    )
  }

  return <></>
}

const SearchLogin: React.FC<{ mobile?: boolean }> = ({...props}) => {
  return (
    <div className="flex lg:flex-1 items-center justify-end gap-x-4">
      <button className="flex items-center cbold gap-x-1">
        <span className="text-sm">Search</span>
        <IconSearch />
      </button>
      <Login mobile={props.mobile} />
    </div>
  )
}

export default SearchLogin
