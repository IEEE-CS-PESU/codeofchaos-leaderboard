import axios from "axios";
import React, { useState, useEffect } from "react";
import Usercard from "./Usercard";
import Loading from "./Loading";
// import teams from './data';

// let base = "https://public-api.solscan.io/account/tokens?account=";

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
  // const [teamsFinal, setTeamsFinal] = useState({});
  // const [walletBalance, setwalletBalance] = useState([]);
  let [teams, setTeams] = useState([
    {
      name: "Literally anything.",
      wallet_id: "BVsCGrYRYwaK9RpPdpxJHUqsRJTTwdTEK4HRpbqJWmaN",
      walletbal: 0
    },
    {
      name: "Aura",
      wallet_id: "5NRQkj5WEc9EfSu74uz3gzuomVKr9dC7y6y6fnwZgyRc",
      walletbal: 0
    },
    {
      name: "blackhat juniors",
      wallet_id: "2D5VtijAQRhoXZUj4SNe8Aw541rMBgR2wssbVoAC4TVP",
      walletbal: 0
    },
    {
      name: "Runtime Terrors",
      wallet_id: "EciBW9mXGs4gHbh9N4aAfG931FEauU1cgfJoJ2wyHxbG",
      walletbal: 0

    },
    {
      name: "Code pirates",
      wallet_id: "29gc1BZrQmH1saBi6S9qfjTvLotnkExnk2JGWMaLKhwV",
      walletbal: 0

    },
    {
      name: "Pythonic Lava",
      wallet_id: "3h9FpZoRGfXoBecWtyidJVmWGXu6sSXxqpwwyBCAZUXq",
      walletbal: 0

    },
    {
      name: "Code pirates",
      wallet_id: "29gc1BZrQmH1saBi6S9qfjTvLotnkExnk2JGWMaLKhwV",
      walletbal: 0

    },
    {
      name: "Under_dawgs",
      wallet_id: "J57nEvTVhYkasLttz8VNp4AckcmvmLYbSVv5sRBXYZP4",
      walletbal: 0

    },
    {
      name: "It Takes Two",
      wallet_id: "HHoxWLgYALMx2n9taH9UWxGc9yjaMGq1VgVSto45Yf9y",
      walletbal: 0

    },
    {
      name: "Team crackers",
      wallet_id: "2qXUChoBbP29vyodWqLBryUUmweH5ozVyywEzvM12Xkh",
      walletbal: 0

    },
    {
      name: "Unibraincells",
      wallet_id: "F6ZJL4VPa4Vc7q3ZDbfTMP7bZVzeK1A2AbvYxRgxQYMC",
      walletbal: 0

    },
    {
      name: "Inner Peace",
      wallet_id: "5iknvDpLtGiBgqaRxL8SqReBPP16YqXRbyUQCr8ja5zT",
      walletbal: 0

    },
    {
      name: "Brogrammers",
      wallet_id: "H9eMjcKFnyCdoFwHxrU4uXmjQYALbp4D5f3yj3rKypop",
      walletbal: 0

    },
    {
      name: "Code for chaos",
      wallet_id: "ExgC1ExYJEaZyzoR2cvtWCJwY93Y1HtqAdfFdo8YmJDK",
      walletbal: 0

    },
    {
      name: "Boolean Tautology",
      wallet_id: "8zTqGPCWehts45EQYn85qYg8KKkCZJFocyzZKh2TM4bn",
      walletbal: 0

    },
    {
      name: "Chaotic ones",
      wallet_id: "DFK4Ns2ZfW6wT5ta8o4RPAdWRyXKEMjF1hNdPQoUc3Y3",
      walletbal: 0

    },
    {
      name: "Code pirates",
      wallet_id: "29gc1BZrQmH1saBi6S9qfjTvLotnkExnk2JGWMaLKhwV",
      walletbal: 0

    },
    {
      name: "VVSC",
      wallet_id: "AQzmPEZgkGw5JH8quem5wZGykVZdEoaBb8TGAfzxb6mu",
      walletbal: 0

    },
    {
      name: "Code pirates",
      wallet_id: "29gc1BZrQmH1saBi6S9qfjTvLotnkExnk2JGWMaLKhwV",
      walletbal: 0

    },
    {
      name: "Neural API",
      wallet_id: "7WhPwNSeuwyd6K9tM6wtdBDZjnSSGuUjBYR2MDUPHAVy",
      walletbal: 0

    },
    {
      name: "Knights",
      wallet_id: "Ap7MZYb1SY9FfNSQneCwx2U6zHPPNpSv1maGTHu5SWYC",
      walletbal: 0

    },
    {
      name: "SuperMax",
      wallet_id: "4BNGFqVYZH3mTaeh7rCeoC37vg8Tse68geoYePjjYAnh",
      walletbal: 0

    },
    {
      name: "The Blackhawks",
      wallet_id: "2b1EYrTcWPKCFQAnaQRUGfYygXJL6B69nZcvTbmgZEsB",
      walletbal: 0

    },
    {
      name: "Egg bun sheesh",
      wallet_id: "DdsBx1byVwtEMiR5HR4t4Nja5mpTQ6wSUgTa4cYyoc42",
      walletbal: 0

    },
    {
      name: "Yagerist",
      wallet_id: "FBD2mzKNMeFXBSxmCzEBTwc7yNZhEiUk16uvvo8mudbr",
      walletbal: 0

    },
    {
      name: "Ekansh",
      wallet_id: "F39T8EuU321FcqpEy5f9D24V5LdvrUghNpf2nBsMorEm",
      walletbal: 0

    },
    {
      name: "Bloxaflick",
      wallet_id: "EDFYGaiD7R4Dy1E8L98eJtAa9oDXQfp3UAReHdaKfoiz",
      walletbal: 0

    },
    {
      name: "0010",
      wallet_id: "Co9izCjB7E8XKv6jx59dFw9H9jPugfmpjWCkvfymtiHb",
      walletbal: 0

    },
    {
      name: "Binary Beasts",
      wallet_id: "8jFiEvs8HCnzHivNZEsd4eSZV32g32eukHEFhd69zvHZ",
      walletbal: 0

    },
    {
      name: "Team Debug",
      wallet_id: "58Ec5jxsR4rg1yoVNx3MdYCumof4H16BCmAabKgBDs3e",
      walletbal: 0

    },

  ]);

  let [newTeams, setNewTeams] = useState({});

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
      // console.log(teams[index].wallet_id);
      axios({
        method: "get",
        url: `https://ieeecspesu.herokuapp.com/wallet/${teams[index].wallet_id}`,
      })
        .then(function (res) {
          let curr = teams[index];
          // console.log(res.data);
          curr.walletbal = res.data;
          let { name, ...withoutName } = curr;

          //callback for setState for getting the previous state
          setNewTeams((prev) => ({ ...prev, [name]: withoutName }));
          setTeams([...teams, curr]);

          // teams[index].walletbal = (res.data)
        })
        .catch((err) => {
          console.log("Fail");
        });
      // axios.get(`https://localhost:6020/wallet/${teams[index].wallet_id}`)
      //     .then(res => {
      //         console.log(res);
      //     })
      //     .catch(err => {
      //         console.log("Fail ")
      //     })
    }
    // console.log(newTeams);
    // console.log("Object Keys : ", Object.keys(newTeams));
    // console.log("Object Values : ", Object.values(newTeams));

    //map these two
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    });
  };

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
    let newArr = [];
    for (const key in n) {
      let tempObj = {};
      // "name": "hita",
      // "wallet_id": "GqE2mQvxfsxQyYZLWhtmzesLd5HN6Bbe3sHvoAV8tEmZ",
      // walletbal: 0,
      // image: "from_api"
      tempObj["name"] = key;
      tempObj["walletbal"] = n[key]["walletbal"];
      tempObj["wallet_id"] = n[key]["wallet_id"];
      tempObj["image"] = n[key]["image"];
      newArr.push(tempObj);
      // console.log(tempObj);
      // console.log(`${key}: ${newTeams[key]['walletbal']}`);
    }
    // console.log("NEw array : ", newArr);
    sortTeams(newArr);
    // setTeamsFinal(newArr)
    // console.log(newArr);
    return newArr;
  };
  // let newArrayTeams = [];
  // const iterator = (newTeams) => {
  //   for (const key in newTeams) {
  //     console.log(`${key}: ${newTeams[key]["walletbal"]}`);
  //   }
  // };

  // const forLoop = (n) => {
  //   for (let i = 0; i < n.length; i++) {
  //     console.log("hereeeeeeeeeeeeeeeeeeeeee", n[i]);
  //   }
  // };
  const avatars = ["capybara", "chameleon", "camel", "panda", "coyote", "crow", "dingo", "dinosaur", "duck", "elephant", "ferret", "kangaroo", "koala", "kraken", "leopard", "lemur", "liger", "manatee", "mink"];
  const colors = ["red", "blue", "orange", "red", "green", "purple", "teal"];
  return (
    <div>
      <div className="flex flex-col h-full bg-slate-200 pb-10">
        <div className="flex items-center justify-center">
          <h1 className=" animate-bounce mt-10 mb-3 text-center text-[26px] font-bold uppercase md:text-[33px] lg:text-[37px]">
            💫Code Of Chaos LeaderBoard💫
            {/* <p className="day display: inline-block ">&nbsp;😎</p> */}
          </h1>
        </div>


        <div className="leaderBoard flex justify-center align-center">
          <div className="container">
            {/* To get top 5 : we will use slice() 
            
              .slice(0, 3) --> top 3
            */}
            {

              //loading thingy we have to do
              newTeams // 👈 null and undefined check
                && Object.keys(newTeams).length === 0 ?
                <div className="loading flex justify-center items-center">
                  <Loading />
                </div>

                : mapping(newTeams).map((item, key) => {
                  return (
                    <Usercard
                      className=""
                      name={item.name}
                      walletbal={item.walletbal}
                      key={key}
                      position={key + 1}
                      avatarName={avatars[key]}
                      color={colors[key]}
                      bgColor={key <= 2 ? " rgb(34 197 94)" : "white"}
                      textColor={key <= 2 ? "white" : "black"}
                    />
                  );
                })}

            {/*
            rgb(74 222 128)
             rgb(34 197 94)
            
                             teams.map((item, key) => {
                                return <Usercard name={item.name} walletbal={item.walletbal} key={key} />
                            }) 
                       */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
