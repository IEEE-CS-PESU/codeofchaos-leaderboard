import React from "react";
import Lottie from "react-lottie";
import btc from "../lottie/94450-bitcoin-icon.json";
import eth from "../lottie/36021-staking-on-ethereum.json";
import sol from "../media/img/sol.png";

export default function Conversion(props) {
  console.log(props);
  const btcOptions = {
    loop: true,
    autoplay: true,
    animationData: btc,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const ethOptions = {
    loop: true,
    autoplay: true,
    animationData: eth,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="conversion">
      <span>
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <Lottie options={btcOptions} height={150} width={150} />

                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h4
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      BTC = {props.btc} USD
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <Lottie options={ethOptions} height={150} width={150} />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h4
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      1 ETH = {props.eth} USD
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src={sol}
                    alt="sol"
                    className="mx-auto flex justify-center w-28 h-28 my-5"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h4
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      1 SOL = {props.sol} USD
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </span>
    </div>
  );
}
