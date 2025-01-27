import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

function HorizontalLayout() {
  return (
    <div className="h-[854px] w-[1208px] border m-auto bg-white font-montserrat">
      <div className="flex items-stretch p-14">
        <div className="flex-1 px-4 flex flex-col">
          <div className="flex justify-between">
            <div className="text-5xl font-extrabold">LOGO</div>
          </div>

          <div className="flex-grow"></div>

          <div className="w-full mt-auto">
            <div className="text-3xl font-bold mx-8">Tiles Name</div>
            <div className="flex items-center">
              <AiFillCaretLeft className="text-xl text-gray-400" />
              <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
            </div>

            <div className="mt-2 flex items-start space-x-2">
              <div className="h-[200px]  w-[350px] border border-gray-400 bg-[#dddddd] py-6 flex items-start justify-center text-5xl font-semibold">
                R2
              </div>
              <div className="h-[200px] w-[350px] border border-gray-400 bg-[#dddddd]  py-6  flex items-start justify-center text-5xl font-semibold">
                R3
              </div>
            </div>

            <div className="flex justify-between mt-4 text-base mb-20">
              <div className="relative flex flex-col items-start">
                DIMENSION
                <br />
                <span className="font-extrabold">600x1200 mm</span>
              </div>

              <div className="w-[60px] h-[2px] mt-6 bg-[#c5c3c3] rotate-[-60deg]"></div>

              <div className="relative flex flex-col items-start">
                RANDOM
                <br />
                <span className="font-extrabold">FACES</span>
              </div>

              <div className="w-[60px] h-[2px] mt-6 bg-[#c5c3c3] rotate-[-60deg]"></div>

              <div className="relative flex flex-col items-start mr-10">
                FINISH
                <br />
                <span className="font-extrabold">MATT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 border border-gray-400 h-[750px] w-[200px] flex items-start justify-center py-10 bg-[#dddddd]">
          <p className="text-6xl font-semibold">R1</p>
        </div>
      </div>
    </div>
  );
}

export default HorizontalLayout;
