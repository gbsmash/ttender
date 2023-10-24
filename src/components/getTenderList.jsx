import React from 'react'
import { useState,useEffect, createContext } from 'react';
import axios from 'axios';
import Tenderlist from './tenderlist';
import Search from './search';



export const tenderList = createContext(null);

export default function GetTenderList() {

    const [tenders, setTenders] = useState([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExLCJlbWFpbCI6InNvbWVAZ21haWwuY29tIiwiaWF0IjoxNjUzMjI4NDk1LCJleHAiOjE2NTMyMjkzOTV9.2D4ZHUn4URUtinLO0deEqi2u3MHZ_D2alFOy2KqMsI4';
    // axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
        setTenders(response.data);
      }).catch((error) => {
        console.error(error)
      });
    },[]);
    // useEffect(() => {
    //   axios.get(`https://backendfortender.herokuapp.com/posts`).then((response) => {
    //     console.log(response.data);
    //   }).catch((error) => {
    //     console.error(error)
    //   });
    // },[]);

    
  return (
    <tenderList.Provider  value = {{tenders, setTenders}}>
        <Search/>
        <button>S</button>
        <Tenderlist tenders={tenders}/>
    </tenderList.Provider>
  )
}
