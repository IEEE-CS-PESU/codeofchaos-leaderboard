

// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
import ieeeLogo from '../media/img/ieee_logo.png'
function Nav() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-200 flex items-center justify-center ">
      <img src={ieeeLogo} alt="" className="mt-7 h-24 bg-white rounded-xl shadow-xl" />
    </div>
  );
}

export default Nav;

