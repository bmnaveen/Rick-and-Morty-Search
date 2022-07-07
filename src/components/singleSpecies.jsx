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

</div>
<div className='detSec'>

</div>
</div>

    </div>
  )
}

export default SingleSpecies