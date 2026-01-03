

import Moviecard from "./Movie-card";

function Conditonal_Rendering({isLogged})
{
    if(isLogged===true)
    {
        return(<Moviecard 
        name="The Dark Knight"
        release_date={2008}
        rating={9.0}
        duration="152 minutes"
        />)
    }
    else
    {
    return(<h1>Please login</h1>)
    }
}

export default  Conditonal_Rendering;