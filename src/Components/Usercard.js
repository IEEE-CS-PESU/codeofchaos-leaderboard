import React from 'react'
import Animal from "react-animals";

function Usercard(props) {


    return (
        <>
            <div className='user-list w-full max-w-md mx-auto bg-white rounded-xl shadow-xl flex flex-col my-4'>
                <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#e0e2e2]">
                    <div className="user justify-center  flex items-center text-center flex-col sm:flex-row sm:text-left">
                        <div className=" flex avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                            <h1 className='mr-4 text-xl pt-3 center align-middle'>{props.position}.</h1>
                            <Animal size="58px" name={props.avatarName} dance color={props.color} />

                            {/* <img alt="img" className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
                             */}
                        </div>
                        <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4 mr-20">
                            <p className='font-semibold uppercase'>{props.name}</p>
                            <div className="skills flex flex-col">
                                <p className="subtitle text-slate-600">Balance: {props.walletbal}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                        <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button">Follow</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Usercard;
