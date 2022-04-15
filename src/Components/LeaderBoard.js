import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Usercard from './Usercard'
// import teams from './data';

let base = "https://public-api.solscan.io/account/tokens?account=";


// const getDets = (teams) => {
//     let finalTeams = []
//     for (let i = 0; i < teams.length; i++) {
//         let curr = teams[i];

//         axios.get(base + 'DeEtABmXPH23E7RZ4AvMrn8riEDaxvd65VsowjWw7vV6')
//             .then(res => {
//                 curr.walletbal = Number(res.data['0']['tokenAmount']['uiAmountString']);
//                 finalTeams.push(curr);


//             }).catch(e => {
//                 console.log(`Error calling ${e}`)
//             })

//     }

//     return finalTeams;
// }

// function LeaderBoard() {
const LeaderBoard = () => {
    const [teamsFinal, setTeamsFinal] = useState({});
    const [walletBalance, setwalletBalance] = useState([]);
    let [teams, setTeams] = useState([
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
        {
            "name": "anirudh",
            "wallet_id": "HMiwF6K3oD5sg9nCefNHsn4kgzCUkYd5dM216JSQbvtG",
            walletbal: 0,
            image: "from_api"
        }

    ])

    let [newTeams, setNewTeams] = useState(
        {
            "hita":
            {

                "wallet_id": "GqE2mQvxfsxQyYZLWhtmzesLd5HN6Bbe3sHvoAV8tEmZ",
                walletbal: 0,
                image: "from_api"
            },
            "veer":
            {

                "wallet_id": "DeEtABmXPH23E7RZ4AvMrn8riEDaxvd65VsowjWw7vV6",
                walletbal: 0,
                image: "from_api"
            },
            "anirudh":
            {
                "wallet_id": "HMiwF6K3oD5sg9nCefNHsn4kgzCUkYd5dM216JSQbvtG",
                walletbal: 0,
                image: "from_api"
            }
        })



    // let n = teams.length;

    // for (let index = 0; index < teams.length; index++) {
    //     const element = teams[index];
    //     console.log(element);

    // }


    /*

        GOLDEN RULE : 
        F Arrays...
        Object has unique reference 
    
        
    */

    /*
        OBJECTS IS "Fire"
    */

    useEffect(() => {
        for (let index = 0; index < teams.length; index++) {
            console.log(teams[index].wallet_id)
            axios({
                method: 'get',
                url: `http://localhost:6020/wallet/${teams[index].wallet_id}`,
            })
                .then(function (res) {
                    let curr = teams[index];
                    console.log(res.data)
                    curr.walletbal = res.data;
                    let { name, ...withoutName } = curr;

                    //callback for setState for getting the previous state 
                    setNewTeams((prev) => ({ ...prev, [name]: withoutName }))
                    setTeams([...teams, curr]);


                    // teams[index].walletbal = (res.data)
                }

                )
                .catch(err => {
                    console.log("Fail");
                })
            // axios.get(`https://localhost:6020/wallet/${teams[index].wallet_id}`)
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.log("Fail ")
            //     })

        }
        console.log(newTeams);
        console.log("Object Keys : ", Object.keys(newTeams));
        console.log("Object Values : ", Object.values(newTeams));

        //map these two


    }, [])

    // for (let index = 0; index < teams.length; index++) {
    //     const element = teams[index].walletbal;
    //     console.log(element);

    // }

    // useEffect(() => {
    //     axios("https://public-api.solscan.io/account/tokens?account=GqE2mQvxfsxQyYZLWhtmzesLd5HN6Bbe3sHvoAV8tEmZ")
    //         .then(res => {

    //             let num = (Number(res.data['0']['tokenAmount']['uiAmountString']));
    //             let a = [...walletBalance, num]
    //             setwalletBalance(a);
    //         }).catch(e => {
    //             console.log(`Error calling ${e}`)
    //         })

    // }, [])

    // console.log(teams);


    // for (let i )


    // for (let i = 0; i < teams.length; i++) {
    //     axios.get(base + 'DeEtABmXPH23E7RZ4AvMrn8riEDaxvd65VsowjWw7vV6')
    //         .then(res => {
    //             console.log(Number(res.data['0']['tokenAmount']['uiAmountString']));
    //         }).catch(e => {
    //             //                console.log(`Error calling ${e}`)
    //         })

    // }




    // const getWallet = (teams)=>{
    //get every teams wallet balance

    // }
    // getWallet(teams);
    // console.log(walletbal)
    // for (var i = 0; i < 2; i++) {
    //     // console.log(teams[i].walletbal)
    //     console.log("here")
    //     console.log(walletbal)

    // }
    const sortTeams = (teams) => {

        teams.sort((a, b) => {
            return b.walletbal - a.walletbal;

        })
    }

    // sortTeams(walletbal)


    // const sortBywalletBalance = obj => {
    //     const order = [], res = {};
    //     Object.keys(obj).forEach(key => {
    //         return order[obj[key]['walletbal'] - 1] = key;
    //     });
    //     order.forEach(key => {
    //         res[key] = obj[key];
    //     });
    //     return res;
    // }
    // console.log(sortByPosition(obj));


    const mapping = (n) => {
        let newArr = []
        for (const key in n) {

            let tempObj = {}
            // "name": "hita",
            // "wallet_id": "GqE2mQvxfsxQyYZLWhtmzesLd5HN6Bbe3sHvoAV8tEmZ",
            // walletbal: 0,
            // image: "from_api"
            tempObj['name'] = (key)
            tempObj['walletbal'] = (n[key]['walletbal'])
            tempObj['wallet_id'] = (n[key]['wallet_id'])
            tempObj['image'] = (n[key]['image'])
            newArr.push(tempObj);
            console.log(tempObj);
            // console.log(`${key}: ${newTeams[key]['walletbal']}`);
        }
        console.log("NEw array : ", newArr);
        sortTeams(newArr);
        // setTeamsFinal(newArr)
        return newArr;

    }
    let newArrayTeams = [];
    const iterator = (newTeams) => {
        for (const key in newTeams) {


            console.log(`${key}: ${newTeams[key]['walletbal']}`);
        }
    }

    const forLoop = (n) => {
        for (let i = 0; i < n.length; i++) {
            console.log("hereeeeeeeeeeeeeeeeeeeeee", n[i]);

        }
    }
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200'>
                <h1 className="my-10 text-3xl sm:text-4xl font-black">
                    LeaderBoard
                    <p className="day display: inline-block">&nbsp;😎</p>
                </h1>

                <div className="leaderBoard">
                    <div className="container">'


                        {


                            (mapping(newTeams)).map((item, key) => {
                                return <Usercard name={item.name} walletbal={item.walletbal} key={key} position={key + 1} />
                            })




                        }


                        {/*
                             teams.map((item, key) => {
                                return <Usercard name={item.name} walletbal={item.walletbal} key={key} />
                            }) 
                       */ }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LeaderBoard