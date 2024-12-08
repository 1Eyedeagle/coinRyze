import React from "react";
import bitcoin from "../assets/images/bitcoin.png";
import crb from "../assets/images/crb.png";
import eth from "../assets/images/eth.png";
import ltc from "../assets/images/ltc.png";
import trx from "../assets/images/trx.png";
import usdt from "../assets/images/usdt.png";

const cryptoData = [
  {
    name: "BTC",
    image: bitcoin,
    priceUSD: "98100.32",
    priceEUR: "48787.83",
    change: "-1.41",
  },
  {
    name: "LTC",
    image: ltc,
    priceUSD: "98100.32",
    priceEUR: "48787.83",
    change: "-1.41",
  },
  {
    name: "ETH",
    image: eth,
    priceUSD: "98100.32",
    priceEUR: "48787.83",
    change: "-1.41",
  },
  {
    name: "CRB",
    image: crb,
    priceUSD: "98100.32",
    priceEUR: "48787.83",
    change: "-1.41",
  },
  {
    name: "TRX",
    image: trx,
    priceUSD: "98100.32",
    priceEUR: "48787.83",
    change: "-1.41",
  },
  {
    name: "USDT",
    image: usdt,
    priceUSD: "98100.32",
    priceEUR: "48787.83",
    change: "-1.41",
  },
];

const Data = () => {
  return (
    <div className="container-fluid">
      <h3>Market Data</h3>
      <div className="row market-data" id="data">
        {cryptoData.map((crypto, index) => (
          <div className="btc-card text-center" key={index}>
            <img
              src={crypto.image}
              alt={`${crypto.name} logo`}
              // style={{ height: "50px" }}
            />
            <h4>
              <strong>{crypto.name}</strong>
            </h4>
            <h5>${crypto.priceUSD}</h5>
            <h5>€ {crypto.priceEUR}</h5>
            <span className="value">{crypto.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
