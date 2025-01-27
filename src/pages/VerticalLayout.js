import React from "react";

function VerticalLayout() {
  return (
    <div className="w-[854px] h-[1208px] m-auto bg-white border font-montserrat">
      <div className="absolute w-[25%] h-[1208px] top-0 bg-[#f1f1f1]"></div>
      <div className="flex justify-between items-center mb-2 mt-8 relative z-10 px-10 py-6">
        <div>
          <h1 className="text-5xl font-light"><span>600 X</span><br/> 1200mm</h1>
          <p className="uppercase text-2xl font-bold"><span>Endless </span><br/>Collection</p>
        </div>
      </div>

      <div className="flex items-stretch relative z-10 px-10">
    
        <div className="flex-1 border border-black h-[900px] flex items-start justify-start p-4 bg-[#f1f1f1]">
          <p className="text-2xl font-semibold">R1</p>
        </div>

        <div className="flex-1 ml-8 mt-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl">Antique Macdoniya</h2>
            <div className="border-t-2  border-gray-800 w-[40%] mb-4"></div>
            <p className="text-lg mb-4 text-gray-500">
              Finish_<br /><span className="font-bold text-black"> Glossy</span>
            </p>
            <p className="text-lg text-gray-500">Endless - 3 pcs</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="border border-black h-[350px] flex items-center justify-center bg-[#f1f1f1]">
              <p className="text-2xl font-semibold">R1</p>
            </div>
            <div className="border border-black h-[350px] flex items-center justify-center bg-[#f1f1f1]">
              <p className="text-2xl font-semibold">R2</p>
            </div>
            <div className="border border-black h-[350px] flex items-center justify-center bg-[#f1f1f1]">
              <p className="text-2xl font-semibold">R3</p>
            </div>
            <div className="border border-black h-[350px] flex items-center justify-center bg-[#f1f1f1]">
              <p className="text-2xl font-semibold">R4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalLayout;
