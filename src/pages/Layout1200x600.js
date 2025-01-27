import React from "react";
import Tile from "../assets/tile.jpeg";

const Layout1200x600 = () => {
  return (
    <div className="h-[854px] w-[1208px] border m-auto bg-white font-montserrat flex">
      <div className="w-1/2 h-full bg-white">
        <div className="text-6xl font-extrabold px-14 pt-14">ITALUS</div>

        <div className="flex px-14">
          <div className="border-t-2 mt-3 border-black w-[18%] mr-2"></div>
          <div className="text-base">BUILD BETTER</div>
        </div>

        <div className="mt-24 h-[300px]">
          <img src={Tile} alt="tile" className="w-full h-full" />
        </div>

        <div className="flex py-10 justify-between">
          <div>
            <p className="text-base px-14">CONCEPT</p>
            <p className="text-3xl font-extrabold px-14">ASTRUS AQUA</p>
            <div className="flex mt-2">
              <div className="border-t-4 border-gray-900 w-[15%]"></div>
              <div className="border-b-2 border-gray-900 w-[70%]"></div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-extrabold px-14 leading-none">
              SEMI-HIGH
              <br />
              <span className="text-4xl font-extrabold">GLOSS</span>
              <br />
              <span className="text-sm font-normal">SERIES</span>
            </h2>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-sm font-bold px-14 leading-none">
            5 RANDOM
            <br />
            <span className="text-sm font-normal">PHASE</span>
          </h2>
          <div className="flex py-4 justify-between">
            <div>
              <h2 className="text-xs px-14 leading-none">
                SIZE:
                <br />
                <span className="text-sm font-bold">600x1200mm</span>
              </h2>
            </div>
            <div className="text-xs ">
              <p className="text-xs px-14">www.italusvitrified.com</p>
              <div className="flex mt-2 pl-2">
                <div className="border-t-4 border-gray-900 w-[18%]"></div>
                <div className="border-b-2 border-gray-900 w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full bg-[#d5e7eb] flex items-end justify-center">
        <div className="w-[45%] h-[82%] bg-white flex flex-col items-center justify-start space-y-2 p-3">
          <div className="flex justify-between w-full space-x-1.5">
            <img src={Tile} alt="Tile 1" className="w-[49%] h-auto" />
            <img src={Tile} alt="Tile 2" className="w-[49%] h-auto" />
          </div>

          <div className="flex justify-between w-full space-x-1.5">
            <img src={Tile} alt="Tile 3" className="w-[49%] h-auto" />
            <img src={Tile} alt="Tile 4" className="w-[49%] h-auto" />
          </div>

          <div>
            <p className="text-base px-4 mt-4">FINISH</p>
            <p className="text-xl font-extrabold px-4 mb-4">SEMI HIGH GLOSS</p>
            <h2 className="text-sm px-4 leading-none mb-4">
              SURFACE
              <br />
              <span className="text-sm font-bold">POLISH</span>
            </h2>

            <h2 className="text-sm px-4 leading-none">
              THICKNESS:
              <br />
              <span className="text-sm font-bold">9MM</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout1200x600;
