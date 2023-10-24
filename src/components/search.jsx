import React, { useLayoutEffect } from "react";
import { useState, useContext, useEffect } from "react";
import Tenderlist from "./tenderlist";
import { tenderList } from "./getTenderList";
import Tender from "./tender";
import Searchlist from "./searchList";

export default function Search() {
  const { tenders } = useContext(tenderList);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => { setFilteredResults([])}, [] )

  const searchTenders = (searchValue) => {

    setSearchItem(searchValue);
    const filteredData = tenders
      .filter((item) => {
        if (searchValue === "") {
          return item;
        } else if (item.name.toLowerCase().includes(searchValue.toLowerCase()))
          return item;
      });

    setFilteredResults(filteredData);
  };

  return (
    <div className="search">
      <input type="text" onChange={(event) => searchTenders(event.target.value)} placeholder="Enter the tender....."/>
      {
        searchItem.length != 0 && (
          <div className="searchResult">
            <Searchlist filteredResults={filteredResults}/>
          </div>
        )
      }
    </div>
  );
}
