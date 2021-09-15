import './Episode.css'

const Episode = ({episode, handleClick}) => {
    return (
        <div className='episode-content'>
            {episode.image.medium ? 
                <img src={episode.image.medium} alt="" /> :
                <div className='episode-image-placeholder'></div>
            }
            <div className='episode-content-name-summary'>
                <p className='episode-hide' onClick={handleClick}>X</p>
                <h3>{episode.name}</h3>
                <p>{episode.summary.replace( /(<([^>]+)>)/ig, '')}</p>
            </div>
        </div>
    )
}

export default Episode
