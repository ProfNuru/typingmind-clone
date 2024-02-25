import { useState } from 'react'
import TextInput from '../FormUI/TextInput'
import './SearchChats.css'

const SearchChats = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="search-form">
      <TextInput
        css={{
          outline: '#777'
        }}
        placeholder="Search chats"
        value={searchValue}
        onChange={setSearchValue}
      />
    </div>
  )
}

export default SearchChats
