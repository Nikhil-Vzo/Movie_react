import './Movie-card.css'
import PropTypes from 'prop-types'

//component banaya hai Moviecard.jsx mein jisme props use kiye hai
function Moviecard(props)
{
return( 
    <div className="movie-card">
    <h1>Name:{props.name}</h1>
    <h1>Release_Date:{props.release_date}</h1>
    <h1>Rating:{props.rating}</h1>
    <h1>Duration:{props.duration}</h1>
    </div>
)








Moviecard.propTypes={
    name:PropTypes.string.isRequired,   
    release_date:PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    duration:PropTypes.string.isRequired    
}
Moviecard.defaultProps={
    name:"Unknown",
    release_date:2024,
    rating:0,
    duration:"0 minutes"
}


}

export default Moviecard;