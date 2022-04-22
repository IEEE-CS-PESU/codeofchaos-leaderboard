import axios from "axios";
// import { get } from "mongoose";
import { useEffect, useState } from "react";
import Conversion from "./Components/Conversion";
import LeaderBoard from "./Components/LeaderBoard";
// import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import QR from "./Components/QR";

// import Test from "./Components/Test";



function App() {
  const [btc, setBTC] = useState("");
  const [eth, setETH] = useState("");
  const [sol, setSOL] = useState("");



  // ping working
  // axios.get('https://api.coingecko.com/api/v3/ping')
  // .then(res=>{
  //   console.log(res);
  // })

  // axios.get('https://public-api.solscan.io/market/token/So11111111111111111111111111111111111111112')
  // .then(res=>{
  //   console.log(res);
  // })

  //not working
  // axios.get("http://api.hitbtc.com/api/3/public/ticker")
  // .then(res=>{
  //   console.log(res);
  // })

  //half working
  // axios.get("https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2021-07-22/2021-07-22?apiKey=uMC6Utq3j7VWlVOMnwwTa2JutomJKHQO")
  // .then(res=>{
  //   console.log(res);
  // })
  // .catch(err=>{
  //   console.log(err)
  // })

  // const getETH = ()=>{
  //   axios.get("https://api.nomics.com/v1/currencies/ticker?key=c8dc12c068936b44d9af4327da8f112d2dbab72a&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&platform-currency=BTC&per-page=100&page=1")
  //     .then(response => console.log(response['data']))

  // }
  // const getBTC = ()=>{
  //   axios.get("https://api.nomics.com/v1/currencies/ticker?key=c8dc12c068936b44d9af4327da8f112d2dbab72a&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&platform-currency=ETH&per-page=100&page=1")
  //     .then(response => console.log(response))
  // }

  // useEffect(() => {
  //   getBTC()
  // });

  // const getETH =()=>{
  //   axios.get('https://api.kucoin.com/api/v1/prices')
  //   .then(res => console.log(res))
  // }
  //getETH();

  // const func =()=>{
  //   axios.get('https://localhost:3000/')
  //   .then(res=>{
  //     console.log(res)
  //   })
  // }
  //func()

  useEffect(() => {
    // console.log("Getting Prices");
    axios
      .get("https://ieeecspesu.herokuapp.com/btc")
      .then((res) => {
        setBTC(res.data);
      })
      .catch((err) => {
        console.log("Fail ");
      });

    axios
      .get("https://ieeecspesu.herokuapp.com/eth")
      .then((res) => {
        setETH(res.data);
      })
      .catch((err) => {
        console.log("Fail ");
      });

    axios
      .get("https://ieeecspesu.herokuapp.com/sol")
      .then((res) => {
        setSOL(res.data);
      })
      .catch((err) => {
        console.log("Fail ");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Test /> */}
        <Navbar />
        <LeaderBoard />

        <Conversion btc={btc} eth={eth} sol={sol} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: "30px",
          }}
        >
          <footer>
            <QR />
          </footer>

        </div>
      </header>
    </div>
  );
}

export default App;
