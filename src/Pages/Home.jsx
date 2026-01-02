import Moviecard from "../components/Movie-card";       

function App()
{
    return(
        <div className="movie-container">
        <Moviecard name="Inception" release_date="2010" rating="8.8" duration="148 minutes"/>
        <Moviecard name="The Dark Knight" release_date="2008" rating="9.0" duration="152 minutes"/>
        <Moviecard name="Interstellar" release_date="2014" rating="8.6" duration="169 minutes"/>
        <Moviecard name="Parasite" release_date="2019" rating="8.6" duration="132 minutes"/>
        </div>
    )
}

export default App;