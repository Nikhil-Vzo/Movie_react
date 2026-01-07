//In this example, the form state variable holds an object. 
// Each input has a change handler that calls setForm with the next state of the entire form. 
// The { ...form } spread syntax ensures that the state object is replaced rather than mutated.

import { useState } from "react";

function Form(){
    const [form,setForm]= useState(
        {
            first_name:"Nikhil",
            last_name:"Yadav",
            email:"ny@gmail.com",
        }
    );





return(
    <>
    <label>
        First name:
        <input value={form.first_name}
        onChange={e =>{
            setForm({
            ...form,
            first_name:e.target.value

        });
    }}
    />
        </label>
        <label>
            Last name:
            <input value={form.last_name}
            onChange={e=>{
                setForm({
                    ...form,
                    last_name:e.target.value
                });
            }}
            />
        </label>
        
    </>
);
}


export default Form