import React from 'react'
import { useEffect } from 'react';
const SingleSpecies = ({single,setTempState}) => {
   
        useEffect(() => {
          document.body.style.overflow = "hidden";
        }, []);
  return (
    <div className='SingleSpecies'>

<div className='centerDiv'>
<div className='closeDIv' >
<h4 onClick={()=>{
    document.body.style.overflow = "scroll";
    setTempState(false)
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

</div>
</div>

    </div>
  )
}

export default SingleSpecies