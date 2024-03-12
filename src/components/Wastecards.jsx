/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const WasteCards = ({ list }) => {
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      {list.map((item, index) => (
        <div
          key={index}
          className={`max-w-96 rounded-lg shadow-md p-4 ${item.label === "verde" ? "bg-green-500" : item.label === "blanco" ? "bg-white" : "bg-black"
            }`}
        >
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-lg sm:m-h-64 md:h-64 w-full" src={item.img} alt="" />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gray-700 bg-opacity-50 hover:bg-opacity-0 transition duration-300 ease-in-out"></div>
          </div>

          <div className="p-2">
            <h5 className={`mb-2 text-lg font-normal leading-tight ${item.label === "verde" ? "text-black" : item.label === "blanco" ? "text-gray-800" : "text-white"
              }`}><span className="font-bold">Descripción:</span> {item.description}</h5>
              {item.label === 'blanco' && (
                <p className="font-thin italic  text-black">Recuerda que debes lavarlos y dejarlos secar antes de tirarlos.</p>
              )}
            <div className="flex justify-between text-sm text-gray-600">
              <span>{item.date}</span>
              <span>{item.owner}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WasteCards;
