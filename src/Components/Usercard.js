import React from 'react'
import Animal from "react-animals";

function Usercard(props) {

    // text-blue-400
    // bg-blue-700

    // const myClass_1 = "user-list w-full max-w-md mx-auto rounded-xl shadow-xl flex flex-col my-4 bg-" + props.bgColor;
    // const bg_Color_String = "bg-".concat(props.bgColor)
    // console.log(myClass_1);
    const myClass_2 = "user flex flex-col justify-center items-center text-center sm:flex-row sm:text-left text-" + props.textColor
    const myClass_3 = "subtitle text-" + props.textColor
    return (

        <div className="user-list px-7 md:px-0 md:w-full lg:w-full md:max-w-md mx-auto  flex flex-col my-4  ">
            <div className="user-row" style={{
                backgroundColor: props.bgColor, borderRadius: "12px",
                fontWeight: "bold", color: props.textColor
            }}>
                <div className={myClass_2}>
                    <div className=" flex avatar-content mb-3">

                        <h1 className='mr-7 text-xl pt-6 center lg:align-middle'>{props.position}. </h1>


                        <div className='pt-2 flex align-center justify-center md:py-3'>
                            <Animal size="60px" name={props.avatarName} dance color={props.color} />
                        </div>


                        <div className="gp_1 ml-20 pt-5">

                            <p className='font-semibold uppercase'>{props.name}</p>


                            <p className={myClass_3}>Cero Balance: {props.walletbal}</p>

                        </div>

                        {/* <img alt="img" className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
                             */}
                    </div>
                    {/* <div className="user-body fl">

                    </div> */}
                </div>
                {/* <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                        <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button">Follow</button>
                    </div> */}
            </div>
        </div>
    )
}

export default Usercard;
