/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const WasteCards = ({ list }) => {
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-505 text-white">
      <div className="container mx-auto mt-12 mb-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">CLASIFICACIÓN DE RESIDUOS</h1>
        <div className="flex justify-center">
          <div className="flex items-center mr-6">
            <div className="w-8 h-8 bg-green-500 rounded-full mr-2"></div>
            <span className="font-semibold text-white">Orgánicos</span>
          </div>
          <div className="flex items-center mr-6">
            <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
            <span className="font-semibold text-white">Plásticos</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-full mr-2"></div>
            <span className="font-semibold text-white">No aprovechables</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-4 ${
              item.label === "verde" ? "bg-green-500" : item.label === "blanco" ? "bg-white" : "bg-black"
            }`}
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="rounded-lg sm:m-h-64 md:h-64 w-full" src={item.img} alt="" />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gray-700 bg-opacity-50 hover:bg-opacity-0 transition duration-300 ease-in-out"></div>
            </div>

            <div className="p-2">
              <h5 className={`mb-2 text-lg font-semibold leading-tight ${
                item.label === "verde" ? "text-black" : item.label === "blanco" ? "text-gray-800" : "text-white"
              }`}>{item.description}</h5>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{item.date}</span>
                <span>{item.owner}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteCards;
