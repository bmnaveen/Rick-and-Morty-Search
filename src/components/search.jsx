import React from 'react'
import { ContextStyle } from '../contextApi/contextApi';
import { useContext,useRef } from 'react';
const Search = () => {
    const {toggleName}=useContext(ContextStyle)
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
  return (
    <div  className='weired'>
    <h1 >Rick and Morty Search</h1>
    <div>
    <div><img src="/search.jpg" alt="search-ico"  /></div>
    <input onChange={(e)=>{
            debounce(()=>{
                toggleName(e.target.value);
            },600)
           
        }} type="text" placeholder='Search for a contact' />
    </div>
        </div>
  )
}

export default Search