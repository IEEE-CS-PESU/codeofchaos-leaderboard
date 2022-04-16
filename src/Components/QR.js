import React from "react";
import img from "../media/img/qrcode.png";

export default function QR() {
  return (
    <div id="qr" className="align-center my-8 bg-slate-900">
      <br />
      <h2
        className="flex justify-center font-semibold
                        text-white
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        hover:text-primary"
      >
        Scan QR Code to transfer CEROs!
      </h2>
      <br />
      <div className="mx-auto flex justify-center">
        <img src={img} alt="alt" className="h-48 w-48" />
      </div>
    </div>
  );
}
