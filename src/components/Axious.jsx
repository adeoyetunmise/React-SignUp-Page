import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Axious = () => {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(false)
    const endpoint = 'https://jsonplaceholder.typicode.com/users'
    const endpoint2 = 'https://api.github.com/users'

    useEffect(() => {
      
    }, [])
    
    const getData = ()=>{
       axios.get(endpoint2).then((response)=>{
        console.log(response.data );
        setisloading(true)
        setdata(response.data)
       })
       
    } 
  return (
    <>
    <h1>Fetch</h1>
    <button onClick={getData}>Get Data</button>
    {!isloading?<h2>...loading</h2>:data.map((item,index)=>(
        <div key={index}>
            <h1>{item.login}</h1>
            <img src={item.avatar_url} alt="" srcset="" />

        </div>
    ))}
    
    </>
  )
}

export default Axious