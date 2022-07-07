import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import {ContextStyle} from '../contextApi/contextApi'
const DetailsUserCard = () => {
    const {contacts,togglePage,page,toggleTempState,single}=useContext(ContextStyle) 

        useEffect(() => {
          document.body.style.overflow = "hidden";
        }, []);
  return (
    <div className='SingleSpecies'>

<div className='centerDiv'>
<div className='closeDIv' >
<h4 onClick={()=>{
    document.body.style.overflow = "scroll";
    toggleTempState(false)
}}>X</h4>
</div>
<div className='imgSec'>
<div>
    <img src={single.image} alt="" />
</div>
<div>
    <h3>{single.name}</h3>
    <div> <div style={{backgroundColor:single.status=="unknown" ? "#9eadc3" : single.status=="Alive" ? "#37e598" : "red"}}></div><h4>{single.status} - {single.species}</h4></div>
</div>
</div>
<div className='lineDiv'>
</div>
<div className='detSec'>
<div>
    <div>
    <h5>gendre</h5>
    <h4>{single.gender}</h4>
    </div>
    <div>
    <h5>Location</h5>
    <h4>{single.location.name}</h4>
    </div>
</div>
<div>
<div>
    <h5>Species</h5>
    <h4>{single.species}</h4>
    </div>
    <div>
    <h5>Origin</h5>
    <h4>{single.origin.name}</h4>
    </div> 
</div>
</div>
</div>

    </div>
  )
}

export default DetailsUserCard