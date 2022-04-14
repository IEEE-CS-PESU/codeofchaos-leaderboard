import axios from 'axios';
import { useEffect } from 'react';
import LeaderBoard from './Components/LeaderBoard';
import Navbar from './Components/Navbar';
import QR from './Components/QR';


function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <LeaderBoard/>
        <QR/>
      </header>
    </div>
  );
}

export default App;
