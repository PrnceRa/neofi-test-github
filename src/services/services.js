import ethereum from "../assets/ethereum.svg";
import bitcoin from "../assets/bitcoin.svg";
import matic from "../assets/matic.svg";
import binance from "../assets/binance.svg";
import xrp from "../assets/xrp.svg";
import solana from "../assets/solana.svg";

export const fetchCoinCode = (data) => {
  switch (data) {
    case "BTCUSDT":
      return "Bitcoin";
    case "BCCUSDT":
      return "Bitconnect";
    case "BNBUSDT":
      return "Binance";
    case "NEOUSDT":
      return "Neocoin";
    case "QTUMUSDT":
      return "Qtumcoin";
    case "LTCUSDT":
      return "Litecoin";
    case "ADAUSDT":
      return "Cardano";
    case "XRPUSDT":
      return "XRP";
    case "EOSUSDT":
      return "EOS";
    case "TUSDUSDT":
      return "Truetrade";
    case "IOTAUSDT":
      return "Iota";
    case "ETHUSDT":
      return "Ethereum";
    case "XLMUSDT":
      return "XLM";
    case "ONTUSDT":
      return "ONT";
    case "TRXUSDT":
      return "TRX";
    case "ETCUSDT":
      return "ETC";
    case "ICXUSDT":
      return "ICX";
    case "VENUSDT":
      return "VEN";
    case "VETUSDT":
      return "Vetchain";
    default:
      return "Nuls";
  }
};

export const selectedCoinImg = (coin, height, width) => {
  switch (coin) {
    case "Ethereum":
      return (
        <img src={ethereum} alt="ethereum" height={height} width={width} />
      );
    case "Bitcoin":
      return <img src={bitcoin} alt="bitcoin" height={height} width={width} />;
    case "Matic":
      return <img src={matic} alt="matic" height={height} width={width} />;
    case "Binance":
      return <img src={binance} alt="binance" height={height} width={width} />;
    case "XRP":
      return <img src={xrp} alt="xrp" height={height} width={width} />;
    case "Solana":
      return <img src={solana} alt="solana" height={height} width={width} />;
    default:
      return <img src={solana} alt="solana" height={height} width={width} />;
  }
};
