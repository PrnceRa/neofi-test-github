import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [show , setShow] = useState(false);
  const [coin, setCoin] = useState('ethereum');
  const [price, setPrice] = useState(0.00);
  const [value, setValue] = useState(0.00);
  const [coinData, setCoinData] = useState([]);
  const fetchdata = (coinCode) => {
    fetch(coinCode ? `https://api.binance.com/api/v3/ticker/price?symbol=${coinCode}` : 'https://api.binance.com/api/v3/ticker/price')
    .then(res=>res.json())
    .then(data=>{setCoinData(coinCode ? [data] : data?.filter(items=>items.symbol.includes('USDT')).slice(0,20));coinCode && setPrice(+data.price)})
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchdata('ETHUSDT');
    setPrice()
  },[])
  useEffect(()=>{
    fetchdata();
    setValue(0.00);
  },[show])
  return (
    <div className="App">
      <div style={show ? {opacity:0.5 , width : '100%', height: '100%' , backgroundColor : "transparent",pointerEvents:"none"}:{}}>
        <Header />
        <Body value={value} open={setShow} coin={coin} setValue={setValue} price={price}/>
      </div>
      {show && <Search open={setShow} selectedCoin={coin} setPrice={setPrice} setSelectedCoin={setCoin} coinData={coinData}/>}
    </div>
  );
}

export default App;
