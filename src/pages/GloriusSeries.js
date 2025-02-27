import React from "react";
import Tile from "../assets/tile.jpeg";
import { BsUmbrella,BsFire,BsHeart } from "react-icons/bs";

const GloriusSeries = () => {
  return (
    <div className="h-[854px] w-[1208px] border m-auto bg-black font-montserrat flex">
      <div className="absolute w-[10%] h-[854px] top-0 bg-gray-100"></div>

      <div className="relative flex flex-col mt-24 text-white w-1/3 h-auto justify-between">
        <div className="text-5xl font-normal absolute right-8 ">
          <h2>
            ME<span className="text-[#9a4f31]">G</span>A
          </h2>
          <p className="px-2 text-[10px]">the story of ceramic</p>
        </div>
        <div className="absolute right-40 top-20 h-[360px] w-[2px] bg-[#9a4f31]" />

        <div className="absolute right-28 bottom-24 flex flex-col space-y-3 text-[10px] font-normal place-items-center pl-24 my-auto">
          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
            <BsUmbrella className="text-[#9a4f31] h-4 w-4" />
          </div>
          <p>PROTECTION</p>
          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
            <BsFire className="text-[#9a4f31] h-4 w-4" />
          </div>
          <p>FIREPROOF</p>
          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
            <BsHeart className="text-[#9a4f31] h-4 w-4" />
          </div>
          <p>DURABILITY</p>
        </div>

        <a href="mailto:info@megatile.in">
          <p className="absolute bottom-12 right-4 text-white text-lg font-medium">
            www.<span className="text-[#9a4f31]">megatile</span>.in
          </p>
        </a>
      </div>

      <div className="w-1/3 h-full relative mt-20 py-6 pl-6">
        <div className="h-[86%]">
          <img src={Tile} alt="tile" className="w-full h-full" />
        </div>
      </div>

      <div className="w-1/3 h-full relative mt-24">
        <h1 className="font-extrabold text-2xl text-white pl-6 mb-1">
          ALCORA HL
        </h1>
        <div className="border-b-[3px] w-[50%] border-[#9a4f31]" />

        <div className="py-8 pl-6">
          <h1 className="font-bold text-5xl text-[#9a4f31]">LOGO</h1>
        </div>

        <div className="flex justify-between mr-16 mb-2 pl-6">
          <p className="text-sm text-white">
            SIZE : <br />
            <span className="text-[#9a4f31] font-barlow">600x1200MM</span>
          </p>

          <p className="text-sm text-white flex flex-col items-end">
            RANDOM
            <span className="text-[#9a4f31] font-barlow">01</span>
          </p>
        </div>

        <div className="h-[19%] w-[84%] pl-6">
          <img src={Tile} alt="tile" className="w-full h-full" />
        </div>
        <div className="h-[19%] w-[84%] mt-2 pl-6">
          <img src={Tile} alt="tile" className="w-full h-full" />
        </div>
        <div className="h-[19%] w-[84%] mt-2 pl-6">
          <img src={Tile} alt="tile" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default GloriusSeries;
