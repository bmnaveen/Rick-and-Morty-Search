import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import { useRef } from 'react';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
const Weired = () => {
const [contacts,setContacts]=useState([]);
const [page,setPage]=useState(1)
const [namez,setName]=useState("")
const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)
useEffect(()=>{
  getContacts();
},[namez,page])

let timeId=useRef();

const debounce=(fn,time)=>{
    return function(){
    if(timeId.current){
    clearTimeout(timeId.current);
    }
    timeId.current=setTimeout(()=>{
    fn();
    },time);
    }();
        }

const getContacts=()=>{
  axios.get(`https://rickandmortyapi.com/api/character/?${namez.length>=1 ?`name=${namez}&`:""}page=${page}`).then((res)=>{
    setContacts(contacts.concat(res.data.results))
    console.log(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}

window.addEventListener('scroll',()=>{
    
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        setPage(page+1);
    }
  })

  return <>
    <div ref={myRef} className='weired'>
<h1 >Rick and Morty Search</h1>
<div>
<div><img src="/search.jpg" alt="search-ico"  /></div>
<input onChange={(e)=>{
        debounce(()=>{
            setContacts([]);
            setPage(1);
            setName(e.target.value);

        },600)
       
    }} type="text" placeholder='Search for a contact' />
</div>
    </div>
    <div className='dislayData'>
    {
       contacts.map((e)=>{
        return <div>
            <div>
                <div>
                    <img src={e.image} alt="ico" />
                </div>
<h5>{e.name}</h5>
            </div>
            <div>
<div style={{backgroundColor:e.status=="unknown" ? "#9eadc3" : e.status=="Alive" ? "#37e598" : "red"}}></div>
<h6>{e.status} - {e.species}</h6>
            </div>
        </div>
       }) 
    }
</div>
<div  onClick={executeScroll} className='upGo'>
<img src="/top.png" alt="" />
</div>
    </>
}

export default Weired