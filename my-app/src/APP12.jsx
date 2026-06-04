import { useEffect,useState } from 'react';

const URL = "http://geek.itheima.net/v1_0/channels"
function APP(){
    const [content,setContent ] =  useState([])
    useEffect(()=> { 
     //额外的操作 获取频道列表;
     async function getList (){
        const res = await fetch(URL)
        const list= await res.json()
        console.log(list.data.channels)
        setContent(list.data.channels)
     }
     getList()
    }, [])

    return(
        <>
  
   {content.map( item=> <li key= {item.id}>{item.name}</li>)}
        </>
    )
}

export default APP;
