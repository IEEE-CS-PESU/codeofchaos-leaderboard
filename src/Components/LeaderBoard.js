import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Usercard from './Usercard'
// import teams from './data';

function LeaderBoard() {

    const [walletbal, setWalletbal] = useState([]);
    let teams = [
        {
            "name": "hita",
            "wallet_id": "GqE2mQvxfsxQyYZLWhtmzesLd5HN6Bbe3sHvoAV8tEmZ",
            walletbal: 0,
            image: "from_api"
        },
        {
            "name": "veer",
            "wallet_id": "DeEtABmXPH23E7RZ4AvMrn8riEDaxvd65VsowjWw7vV6",
            walletbal: 0,
            image: "from_api"
        },

    ]


    // const getWallet = (teams)=>{
    //get every teams wallet balance

    // useEffect(() => {

        for (var i = 0; i < teams.length; i++) {
            let obj = teams[i];
            axios.get(`https://public-api.solscan.io/account/tokens?account=${obj.wallet_id}`)
                .then((res) => {
                    //console.log(res.data[0]['tokenAmount']['uiAmount'])
                    //teams[i].walletbal = (res.data[0]['tokenAmount']['uiAmount'])

                    let currObjs = walletbal;


                    if (!res.data[0]['tokenAmount']) {
                        obj.walletbal = 0
                    }
                    else {
                        console.log(typeof (res.data[0]['tokenAmount']['uiAmount']))
                        // setWalletbal(res.data[0]['tokenAmount']['uiAmount'])
                        // teams[i].walletbal = res.data[0]['tokenAmount']['uiAmount']
                        obj.walletbal = res.data[0]['tokenAmount']['uiAmount'];

                    }

                    // currObjs.push(obj);
                    const updated = [...currObjs , obj]
                    setWalletbal(updated);

                    //console.log(teams[i].walletbal)
                })

        }
    // });




    // }
    // getWallet(teams);
    // console.log(walletbal)
    for (var i = 0; i < 2; i++) {
        // console.log(teams[i].walletbal)
        console.log("here")
        console.log(walletbal)

    }
    const sortTeams = (teams) => {

        teams.sort((a, b) => {
            return b.walletbal - a.walletbal;

        })
    }

    sortTeams(walletbal)

    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200'>
                <h1 className="my-10 font-medium text-3xl sm:text-4xl font-black">
                    LeaderBoard
                    <p className="day display: inline-block">&nbsp;😎</p>
                    {/* {  sortTeams(teams) } */}

                    {
                        walletbal.map((element) => {

                            return (
                                // <Usercard name={element.name} walletbal={element.walletbal} />
                                <div className='user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4'>
                                    <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                                        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                                            <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                                                <img alt="img" className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
                                            </div>
                                            <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                                                <a href="#" className="title font-medium no-underline">{element.name}</a>
                                                <div className="skills flex flex-col">
                                                    <p className="subtitle text-slate-500">Bal: {element.walletbal}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                        <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button">Follow</button>
                    </div> */}
                                    </div>
                                </div>
                            )

                        })
                    }
                </h1>
            </div>
        </div>





    )
}

export default LeaderBoard