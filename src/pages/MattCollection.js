import React from "react";
import Tile from "../assets/tile.jpeg";

const MattCollection = () => {
  return (
    <div className="h-[854px] w-[1208px] border m-auto bg-white font-montserrat">
      <div className="text-6xl font-extrabold px-14 pt-14">UDAY</div>
      <p className="text-sm font-semibold text-black pl-28">G R A N I T O</p>

      <div className="flex mt-28">
        <div className="w-1/3 h-full">
          <div className="flex">
            <p className="text-2xl font-semibold text-black pl-16">Size:</p>
            <div className="border-t-2 border-dashed w-[30%] border-black mt-5 mx-2"></div>
          </div>
          <p className="text-3xl font-semibold font-barlow text-black px-16">
            600x1200<span className="text-[#ED7283]">MM</span>
          </p>
          <div className="border-b-2 border-dashed w-[60%] border-black"></div>
          <p className="text-3xl mt-2 font-semibold font-barlow text-black px-24">
            9<span className="text-[#ED7283]">MM</span>
          </p>
          <div className="border-b-2 border-dashed w-[40%] border-black"></div>
        </div>{" "}
        <div className="w-2/3 h-full relative">
          <div className="absolute right-0 top-0 w-[18%] border-t-2 border-dashed border-black"></div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              <p className="text-xl font-medium text-black pl-14">Faces:</p>
              <div className="bg-gray-200 w-6 h-6 mx-2 flex justify-center items-center">
                <p className="font-bold text-lg">6</p>
              </div>
            </div>

            <p className="text-3xl font-semibold text-black px-14">
              <span className="text-[#ED7283] font-bold">Amanti </span>white
            </p>
          </div>

          <div className="border-b-2 border-dashed w-[80%] ml-16 border-black"></div>
          <div className="flex justify-between px-14 mt-4  pb-2">
            <div className="w-1/2 pr-2">
              <img
                src={Tile}
                alt="Tile 1"
                className="w-full h-[180px] object-cover"
              />
            </div>
            <div className="w-1/2">
              <img
                src={Tile}
                alt="Tile 2"
                className="w-full h-[180px] object-cover"
              />
            </div>
          </div>

          <div className="flex justify-between px-14">
            <div className="w-1/2 pr-2">
              <img
                src={Tile}
                alt="Tile 3"
                className="w-full h-[180px] object-cover"
              />
            </div>
            <div className="w-1/2 ">
              <img
                src={Tile}
                alt="Tile 4"
                className="w-full h-[180px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 justify-between">
        <p className="text-xl font-medium text-black px-10">
          www.udaygranito.com
        </p>
        <p className="text-2xl font-bold text-black px-14">
          MATT <span className="text-[#ED7283] font-semibold">Finish</span>
        </p>
      </div>
      <div className="w-full mt-8">
        <img src={Tile} alt="Tile 3" className="w-full h-[40px] object-cover" />
      </div>
    </div>
  );
};

export default MattCollection;
