import './Show.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import LineGraph from '../LineGraph/LineGraph'


const Show = ({show}) => {
    const [seasonsData, setSeasonsData] = useState(null)
    const [loadingSeason, setLoadingSeason] = useState(true)
    const [loadingEpisodes, setLoadingEpisodes] = useState(true)
    const [episodes, setEpisodes] = useState(null)
    const [selectedSeason, setSelectedSeason] = useState(null)
    // const handleClick = () => {
    //     let response = await axios(`http://api.tvmaze.com/shows/${show.show.id}/seasons/`)
    // }

    const selectSeason = (e) => {
        console.log(e.target.value)
        setSelectedSeason(e.target.value)
        // console.log(`selected season ${selectedSeason}`)
    }

    const fetchData = async () => {
            let response = await axios(`http://api.tvmaze.com/shows/${show.show.id}/seasons`)
            console.log(response.data)
            setSeasonsData(response.data)
            setLoadingSeason(false)
    }

    const fetchEpisodeData = async () => {
        if (!loadingSeason) {
            const seasonArrayNum = selectedSeason - 1
            console.log(`FETCH EP DATA${seasonArrayNum}`)
            const seasonId = seasonsData[seasonArrayNum].id
            let response = await axios(`https://api.tvmaze.com/seasons/${seasonId}?embed=episodes`)
            setEpisodes(response.data._embedded)
            console.log(episodes)
            setLoadingEpisodes(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchEpisodeData()
    }, [selectedSeason])

    return (
        <div className='show'>
            <div>
                <div className="show-summary-outer">
                    <div className="show-summary-outer2">
                        <div className='show-summary'>
                            {show.show.name ? <h2>{show.show.name}</h2> : null}
                           {show.show.premiered? <p>{show.show.premiered}</p> : null}
                            {show.show.summary ? <p>{show.show.summary.replace( /(<([^>]+)>)/ig, '')}</p> : null}
                        </div>
                    </div>
                </div>
                <p className='show-seasons'>Seasons</p>
                {!loadingSeason ? 
                    <select onChange={selectSeason} name='Select season'>
                        <option selected disabled hidden>Select season</option>
                        {seasonsData.map(show => <option value={show.number}>Season {show.number}</option>)}
                    </select> : <p>loading...</p> }
            </div>
            {episodes && <LineGraph episodes={episodes} />}
        </div>
    )
}

export default Show
