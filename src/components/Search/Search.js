import { useState } from 'react'
import './Search.css'

const Search = ({handleSubmit, handleClear, searchTerm, setSearchTerm}) => {
    return (
        <div className='search-container'>
            <h2>Search TV show</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='searchParam' placeholder="Please enter TV show title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
}

export default Search
