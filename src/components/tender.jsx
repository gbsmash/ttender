import React, { useEffect, useState } from "react";
import axios from "axios";



export default function Tender({tender}) {

  return (<div className="container-fluid">
      <div className = "singleTender">{tender.author}</div>
  </div>);
}
