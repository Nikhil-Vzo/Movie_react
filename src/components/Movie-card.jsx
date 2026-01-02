import './Movie-card.css'
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
}

export default Moviecard;