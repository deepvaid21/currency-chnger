import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // second methods
  const Data =useLoaderData()
  // first methods 
  // const [Data, setData] = useState([])
  // useEffect(() => {
  // fetch('https://api.github.com/users/deepvaid21')
  // .then(Response=>Response.json())
  // .then(Data=>{
  //   console.log(Data);
  //   setData(Data)
  // })
  // }, [])
  return (

    <div className=' py-4 text-center text-orange-700' >
      Github followers:{Data.followers}
      <img src={Data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
  const Response = await fetch('https://api.github.com/users/deepvaid21')
  return Response.json()
}