import express from "express";
import cors from "cors";
import axios from "axios"

import https from 'https';
import { rmSync } from "fs";

// var bodyParser=require("body-parser");
// var express = require('express');
var app = express();
// var mongoose=require('mongoose');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

let v = 1
app.get('/wallet/:id', (req, res) => {

    console.log("I got request");
    const id = req.params.id;
    console.log(id);

    axios(`https://public-api.solscan.io/account/tokens?account=${id}`)
        .then(resp => {

            // let num = (Number(res.data['0']['tokenAmount']['uiAmountString']));
            // let a = [...walletBalance, num]
            console.log(v, resp.data['0']['tokenAmount']['uiAmountString']);
            v++;
            res.send((resp.data['0']['tokenAmount']['uiAmountString']))
            // setwalletBalance(a);
        }).catch(e => {
            console.log(`Error calling ${e}`)
        })

    // res.send("dummy data")
})




app.listen(6020, () => {
    console.log('server file is running');
});