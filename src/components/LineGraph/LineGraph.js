import './LineGraph.css'
import Episode from '../Episode/Episode'

const LineGraph = ({episodes}) => {
    
    const handleClick = (e) => {
        const selectedDot = e.target
        selectedDot.classList.toggle('selected-dot')
        const selectedEpisode = selectedDot.nextElementSibling.nextElementSibling
        selectedEpisode.classList.toggle('active-episode')
    }

    console.log('below is episodes')
    console.log(episodes)
    return (
        <div className='line-graph' handleClick={handleClick}>
            {/* {episodes.episodes.map(episode => <span>Episode {episode.number}</span>)} */}
            
            {episodes.episodes.map(episode => (
                <div>
                    <div className='dot' onClick={handleClick}>
                        <div></div>
                        <div></div>
                    </div>
                    <p>Episode {episode.number}</p>
                    <Episode episode={episode} handleClick={handleClick} />
                </div>
            ))}
        </div>
    )
}

export default LineGraph
