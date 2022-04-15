import React from "react";

export default function Conversion(props) {
  console.log(props);
  return (
    <div>
      <span>
        <h2>Conversion rates of BTC to USD</h2>
        <h4>1 BTC = {props.btc} USD</h4>
        <h4>1 ETH = {props.eth} USD</h4>
        <h4>1 SOL = {props.sol} USD</h4>
      </span>
    </div>
  );
}
