import { useEffect, useState, useRef } from 'react'
import Search from '../Search/Search'
import Show from '../Show/Show'
import SideLogo from '../SideLogo/SideLogo'
import './Body.css'
import axios from 'axios'

const Body = () => {

    const [searchTerm, setSearchTerm] = useState(null)
    const [searchResult, setSearchResult] = useState('')
    const [loading, setLoading] = useState(true)
    const [clear, setClear] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearchTerm(e.target.searchParam.value)
    }

    const handleClear = (e) => {
        setLoading(true)
        setClear(true)
        // e.target.form.children[0].value = ''
        setSearchTerm('')
    }

    const fetchData = async () => {
        if (searchTerm != null) { 
            let response = await axios(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
            setSearchResult(response.data[0])
            console.log(response.data[0])
            setLoading(false)
        }
      }
    
    useEffect(() => {
        fetchData(searchTerm)
    }, [searchTerm])
    
    if(loading || !searchTerm) {
        return (
        <div className='body'>
            <div className="body-left">
                <Search handleSubmit={handleSubmit} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClear={handleClear} />
            </div>

            <SideLogo />
        </div>
        )
    }

  

    return (
        <div className='body'>
            <div className="body-left">
                <Search handleSubmit={handleSubmit} handleClear={handleClear} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                {!loading ? <Show show={searchResult} /> : null}
            </div>
            
            <SideLogo />
        </div>
    )
}

export default Body
