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


export function Counter(){

    const [count,setCount]=useState(0)

    function increment() {
        setCount(prev => prev + 1);
    }

    return(
        <>
        <h1>The current count is {count}</h1>
        <button onClick={increment}>Click to count</button>
        <button onClick={()=>setCount(prev =>prev+3)}>Click to increase by +3</button>
        </>
    )
}
