const express = require("express");
const cors = require("cors");
const axios = require("axios");

// import https from 'https';
// import { rmSync } from "fs";

// var bodyParser=require("body-parser");
// var express = require('express');
var app = express();
// var mongoose=require('mongoose');

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(cors());

let v = 1;
app.get("/wallet/:id", (req, res) => {
  // console.log("I got request");
  const id = req.params.id;
  // console.log(id);


  axios(`https://public-api.solscan.io/account/tokens?account=${id}`)
    .then((resp) => {
      if (resp.data["0"]) {
        // console.log(v, resp.data["0"]["tokenAmount"]["uiAmountString"]);
        v++;
        res.send(resp.data["0"]["tokenAmount"]["uiAmountString"]);
      }
      else {
        res.send("0");
      }


    })
    .catch((e) => {
      console.log(`Error calling ${e}`);
    });

});


/*
    -------------------------------------BTC FETCHING----------------------------------------
*/
app.get("/btc", (req, res) => {
  axios(`https://api.hitbtc.com/api/2/public/ticker/BTCUSD`)
    .then((resp) => {
      // console.log(resp.data.last);
      res.send(resp.data.last);
      console.log("SUCCESS ! ! !")
    })
    .catch((e) => {
      console.log(`Error calling ${e}`);
    });
});


/*
    -------------------------------------ETH FETCHING----------------------------------------
*/
app.get("/eth", (req, res) => {
  axios(`https://api.hitbtc.com/api/2/public/ticker/ETHUSD`)
    .then((resp) => {
      // console.log(resp.data.last);
      res.send(resp.data.last);
      console.log("SUCCESS ! ! !")
    })
    .catch((e) => {
      console.log(`Error calling ${e}`);
    });
});


/*
    -------------------------------------SOL FETCHING----------------------------------------
*/

app.get("/sol", (req, res) => {
  axios(`https://api.hitbtc.com/api/2/public/ticker/SOLUSD`)
    .then((resp) => {
      // console.log(resp.data.last);
      res.send(resp.data.last);
      console.log("SUCCESS ! ! !")
    })
    .catch((e) => {
      console.log(`Error calling ${e}`);
    });
});


app.listen(6020, () => {
  console.log("server file is running");
});
