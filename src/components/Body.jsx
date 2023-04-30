import React, { useState } from "react";
import classes from "./Body.module.css";
import { selectedCoinImg } from "../services/services";

const Body = (props) => {
  const [currency, setCurrency] = useState("INR");
  const [number, setNumber] = useState(0);
  return (
    <main className={classes.mainContainer}>
      <div className={classes.icon}>{selectedCoinImg(props.coin, 40, 40)}</div>
      <div className={classes.card}>
        <div className={classes.cardContentHeader}>
          <p>Current value</p>
          <h2>&#8377;{props.price}</h2>
        </div>
        <div
          className={classes.cardContentSelect}
          onClick={() => props.open(true)}
        >
          {selectedCoinImg(props.coin, "auto", "auto")}
          <p>{props.coin[0].toUpperCase() + props.coin.substring(1)}</p>
        </div>
        <div className={classes.cardContentInput}>
          <label htmlFor="price">Amount you want to invest</label>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
            }}
          >
            <input
              type="text"
              id="price"
              placeholder="0.00"
              style={{
                backgroundColor: "#0B0819",
              }}
              value={props.value ? props.value : ''}
              onChange={(e)=>{setNumber(+e.target.value/props.price);props.setValue(e.target.value)}}
            />
            <button>{currency}</button>
          </div>
        </div>
        <div className={classes.cardContentInput}>
          <label htmlFor="buy">Estimate Number of ETH You will Get</label>
          <input type="text" disabled id="buy" placeholder="0.00" value={number.toFixed(2)}/>
        </div>
        <div className={classes.cardActions}>
          <button type="submit">Buy</button>
        </div>
      </div>
    </main>
  );
};

export default Body;
