import { useState,useEffect } from "react";
import {createContext } from "react";
import axios from "axios";
export const ContextStyle=createContext();

export const ContextStyleProvider=({children})=>{
const [contacts,setContacts]=useState([]);
const [page,setPage]=useState(1);
const [namez,setName]=useState("");
const [single,setSingle]=useState({});
const [tempState,setTempState]=useState(false);;
const getContacts=()=>{
    axios.get(`https://rickandmortyapi.com/api/character/?${namez.length>=1 ?`name=${namez}&`:""}page=${page}`).then((res)=>{
      setContacts(contacts.concat(res.data.results))
      
    }).catch((err)=>{
      console.log(err);
    })
  }

useEffect(()=>{
    getContacts();
  },[namez,page])

const togglePage=(add)=>{
    setPage(page+add)
    
}
const toggleName=(add)=>{
    setContacts([]);
    setPage(1);
    setName(add)
}
const toggleSingle=(add)=>{
  setSingle(add)
}
const toggleTempState=(add)=>{
  setTempState(add)
}

    return <ContextStyle.Provider value={{
      page,togglePage,
      namez,toggleName,
      contacts,
      single,toggleSingle,
      tempState,toggleTempState
    }} >{children}</ContextStyle.Provider>
}