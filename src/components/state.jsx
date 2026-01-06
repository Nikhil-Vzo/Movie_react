// import { useState } from "react";  



// function FavouriteColor()
//     {
//         const [color, setColor] = useState("red")
//         return(
//             <>
//             <h1 style={{color: color}} >My fav color is {color}</h1>
//             </>
//         )
//     }

// export default FavouriteColor





import { useState } from "react";

function FavouriteColor(){
    
    const [color,setColor]=useState("pink")
    return(
        <>
        <h1 style={{color:color}}>The current color is {color}</h1>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("red")}>Red</button>
        </>
    )
}

export default FavouriteColor