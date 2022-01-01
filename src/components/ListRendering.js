import React from 'react'

export default function ListRendering() {


// let emplist=["Ankitha","Kavya","Aparna","Udaysri"]

let emplist=[
 {
        name:"Kavya",
        salary:30000,
        email:"kavya@gmail.com"
    },
    {
        name:"Aparna",
        salary:30000,
        email:"aparna@gmail.com"
    },
    {
        name:"Ankitha",
        salary:30000,
        email:"ankithak@gmail.com"
    }
    
]

return (
        <div>
           <h1 >    List Rendering</h1> 
           {/* {
                emplist.map(element => (
                    <h1> {element} </h1>
                 ) ) 
            } */}

            {
            emplist.map(
                empdata =>
                <>
                    <p>{empdata.name}</p>
                    <p>{empdata.salary}</p>
                    <p>{empdata.email}</p>
              </>  
            )
           }

        </div>
    )
}
