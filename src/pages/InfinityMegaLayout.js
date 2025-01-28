import React from "react";
import Tile from "../assets/tile.jpeg";
import QR from "../assets/qr-code.jpg";

const InfinityMegaLayout = () => {
  return (
    <div className="h-[854px] w-[1208px] border m-auto bg-white font-montserrat">
      <div className="px-14 flex justify-between">
        <div className="w-full">
          <div className="text-3xl font-medium mb-2 pt-10">
            AMAZON <span className="text-[#B45A20]">BROWN </span>{" "}
          </div>
          <div className="border-t-2 border-black w-full mb-2"></div>
        </div>
        <div className="text-6xl font-normal mt-8">
          <h2>
            {" "}
            ME<span className="text-[#B45A20]">G</span>A
          </h2>
          <p className="px-2 text-[10px]">the story of ceramic</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 h-full">
          <div className="px-14 flex">
            <img src={Tile} className="w-2/3 h-[700px]" alt="description" />
            <div className="pl-8">
              <div className="">
                <h1 className="mt-20 font-bold text-5xl text-black">
                  {" "}
                  infinity
                </h1>
                <p className="text-[#B45A20]">collection</p>
              </div>
              <div>
                <h1 className="mt-24 font-normal text-2xl text-black">
                  <span className="font-medium">GLOSSY</span> FINISHES{" "}
                </h1>
                <div className="flex my-8">
                  <img src={QR} className="w-20 h-20" alt="QR" />
                  <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-lg font-semibold text-[#B45A20]">
                    360°
                    </h2>
                    <p className="text-black text-[10px]">
                      TAP HERE TO
                      <br /> VIEW <b>360</b> RENDER
                    </p>
                  </div>
                </div>
                <div className="border border-gray-700 w-[90px] h-48 p-4">
                  <p className="text-gray-800 font-bold text-sm  mb-2">
                    600x
                    <br />
                    1200mm
                  </p>
                  <p className="text-black text-sm mb-2">
                    60x
                    <br />
                    120cm
                  </p>
                  <p className="text-black text-sm">
                    24x
                    <br />
                    48inch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[45%] h-full mt-20 bg-white flex flex-col items-center justify-start">
            <div className="flex justify-between w-full mb-1.5">
              <img src={Tile} alt="Tile 1" className="w-[49%] h-auto" />
              <img src={Tile} alt="Tile 2" className="w-[49%] h-auto" />
            </div>

            <div className="flex justify-between w-full">
              <img src={Tile} alt="Tile 3" className="w-[49%] h-auto" />
              <img src={Tile} alt="Tile 4" className="w-[49%] h-auto" />
            </div>

            <div className="border-t-[1px] border-black w-full mt-6 mb-4"></div>

            <div className="flex items-center justify-between w-full">
              <div className="flex">
                <div className="border-b-[6px] border-[#B45A20] w-[30px] mb-4 mr-2"></div>

                <p className="text-gray-800 text-base mb-2">
                  <span className="font-extrabold">8.5 MM</span>
                  <br />
                  thickness
                </p>
              </div>

              <p className="text-gray-800 text-base mb-2">
                <span className="font-extrabold">Random</span>
                <br />
                Faces
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinityMegaLayout;
