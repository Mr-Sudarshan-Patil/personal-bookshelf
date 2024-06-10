
import React from 'react'

function SearchInput({query, onChange}) {

  return (
    <div>
      <input type="text" value={query} onChange={e=> onChange(e.target.value)}/>
    </div>
  )
}

export default SearchInput
