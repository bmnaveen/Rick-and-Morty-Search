import React from 'react';
import { useState } from 'react';
import { useRef,useContext ,useLayoutEffect} from 'react';
import {ContextStyle} from '../contextApi/contextApi'


const BasicUserCard = () => {

const {contacts,togglePage,page,toggleTempState,toggleSingle}=useContext(ContextStyle)



window.addEventListener('scroll',()=>{ 
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      
      togglePage(1);
    }
  })

  return <>
 
    <div className='dislayData'>
    {
       contacts.map((e,i)=>{
        return <div key={i} onClick={()=>{
          toggleSingle(e)
          toggleTempState(true);
        }}>
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
    </>
}

export default BasicUserCard