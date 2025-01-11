import React from 'react'

const page = () => {
  
  type objStructure = {
     
    name:string,
    age:number,
    class:string
  }

  const data:objStructure = {
    name:"bilal",
    age:23,
    class:"bscs"
  } 
  console.log(data)
  return (

    <div>
      <h1 className='bg-black text-white text-center'>THIS IS THE PRACTICE OF TYPESCRIPT BRO !</h1>
    </div>
  )
}

export default page