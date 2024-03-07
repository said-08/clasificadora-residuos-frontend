import React, { useEffect } from "react";

const WasteCards = ({ list }) => {
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto mt-12 mb-8 text-center">
        <h1 className="text-3xl font-semibold">CLASIFICACIÓN DE RESIDUOS</h1>
      </div>
      <div className="flex justify-center">
        {list.map((item, index) => (
          <div key={index} className="block rounded-lg bg-white w-72 mx-4">
            <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
              <img className="rounded-lg sm:m-h-64 md:h-64 w-full" src={item.img} alt="" />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>

            <div className="p-2">
              <div className="flex justify-between">
                <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                  RESIDUO DETECTADO: {item.description}
                </h5>
                <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                  COLOR DE CLASIFICACIÓN: {item.label}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteCards;
