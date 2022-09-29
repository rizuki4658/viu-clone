import React from 'react'
import { Search as IconSearch } from '../../../Icons'

const Search: React.FC<{ mobile?: boolean }> = ({...props}) => {
  return (
    <button
      type="button"
      className="flex items-center cbold gap-x-1">
      <span className="text-sm">Search</span>
      <IconSearch />
    </button>
  )
}

export default Search