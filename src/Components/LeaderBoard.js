import axios from 'axios'
import React, { useState } from 'react'
import Usercard from './Usercard'

function LeaderBoard() {
    const [walletbal, setWalletbal] = useState(0);

    let teams = [
        {
            "name": "abc",
            "wallet_id": "DeEtABmXPH23E7RZ4AvMrn8riEDaxvd65VsowjWw7vV6",
            walletbal: 0,
            image: "from_api"
        },
        {
            "name": "def",
            "wallet_id": "GqE2mQvxfsxQyYZLWhtmzesLd5HN6Bbe3sHvoAV8tEmZ",
            walletbal:0,
            image: "from_api"
        },

    ]

    // const getWallet = (teams)=>{
        //get every teams wallet balance
        // for(var i=0;i<teams.length;i++){
        //     axios.get(`https://public-api.solscan.io/account/tokens?account=${teams[i].wallet_id}`)
        //     .then((res)=>{
        //         //console.log(res.data[0]['tokenAmount']['uiAmount'])
        //         //teams[i].walletbal = (res.data[0]['tokenAmount']['uiAmount'])
        //         if(!res.data[0]['tokenAmount']) 
        //         {
        //             setWalletbal(0)
        //         }
        //         else{
        //             console.log(typeof(res.data[0]['tokenAmount']['uiAmount']))
        //         // setWalletbal(res.data[0]['tokenAmount']['uiAmount'])
        //         teams[i].walletbal = res.data[0]['tokenAmount']['uiAmount']
        //         }
                
        //         //console.log(teams[i].walletbal)
        //     })
        // }


    // }
    // getWallet(teams);
    for(var i=0;i<teams.length;i++)
    {
        console.log(teams[i].walletbal)
        console.log(walletbal)       

    }
    const  sortTeams=(teams)=>{
        
        teams.sort((a,b)=>{
            return b.walletbal-a.walletbal;

        })
    }
    
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200'>
                <h1 className="my-10 font-medium text-3xl sm:text-4xl font-black">
                    LeaderBoard
                    <p className="day display: inline-block">&nbsp;😎</p>
                    {  sortTeams(teams) }

                    {                        
                        teams.map((element)=>{

                            return(
                                <Usercard name={element.name} walletbal={element.walletbal} />
                            )

                        })
                    }
                </h1>
            </div>
        </div>





    )
}

export default LeaderBoard