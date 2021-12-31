import React,{useState} from 'react'

export default function StateInFunctionalComponent() {

    let [name,updateName]=useState("Ankitha");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Ankitha K")}}
            onMouseLeave={()=>{updateName("Ankitha")}}>
                    {name}
            </h1>
        </div>
    )
}
