import React, { useLayoutEffect } from 'react';
import { useState,useContext, useEffect } from 'react';
import Tenderlist from './tenderlist';
import { tenderList } from './getTenderList';



export default function Search() {

  const {tenders} = useContext(tenderList);
  const [filteredResults, setFilteredResults] = useState(tenders);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => { setFilteredResults(tenders)}, [tenders] )

  const searchTenders = (searchValue) => {

    setSearchInput(searchValue)
  
    const filteredData = tenders.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
    })

    setFilteredResults(filteredData)
  }


  return (
    <div>
        <input type="text"  onChange={(event) => searchTenders(event.target.value)} placeholder='Enter the tender.....'/>
        <Tenderlist  tenders = {filteredResults}/>
    </div>
  )
}
