import React from 'react'
import Tender from './tender'
import { useContext } from 'react';
import { tenderList } from './getTenderList';


export default function Tenderlist({tenders}) {
  
  return (
    <div className='tendersContainer'>
      {tenders.map(tender => { return <Tender key={tender.id} tender={tender}/>})}
    </div>
  )
}
