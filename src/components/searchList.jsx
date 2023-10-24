import React from 'react'
import Tender from './tender'
import { useContext } from 'react';
import { tenderList } from './getTenderList';


export default function Searchlist({filteredResults}) {
  
  return (
    <div className="searchResult">
      {filteredResults.map(result => { return (<p key = {result.id} className="searchItem"><a >{result.name}</a></p>)})}
    </div>
  )
}
