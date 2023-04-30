import React, { useEffect, useState } from "react";
import cross from "../assets/cross.svg";
import classes from "./Search.module.css";
import { fetchCoinCode, selectedCoinImg } from "../services/services";

const Search = (props) => {
  const [text, setText] = useState('');
  const [filteredData , setFilteredData] = useState(props.coinData);
  useEffect(()=>{
    setFilteredData(props.coinData.filter(items=>fetchCoinCode(items.symbol).includes(text)))
  },[text])
  return (
    <div className={classes.mainContainer}>
      <div className={classes.card}>
        <div className={classes.cross}>
          <img src={cross} alt="cross" onClick={() => props.open(false)} />
        </div>
        <div>
          <input type="search" placeholder="Search chains" onChange={(e)=>setText(e.target.value)}/>
        </div>
        <ul>
          {filteredData.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  props.selectedCoin === fetchCoinCode(item.symbol) ? classes.select : ""
                }
                onClick={() => {
                  props.setSelectedCoin(fetchCoinCode(item.symbol));
                  props.setPrice((+item.price * 80).toFixed(2));
                }}
              >
                {selectedCoinImg(fetchCoinCode(item.symbol))}
                <p>{fetchCoinCode(item.symbol)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
