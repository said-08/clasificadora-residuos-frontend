import { useEffect, useState } from "react"
import { getWasteList } from "../api/waste.api"
import WasteCards from "./Wastecards";

const WasteList = () => {
  const [waste, setwaste] = useState([])

  useEffect(() => {

    async function loadWaste() {
      const res = await getWasteList();
      setwaste(res.data);
      console.log("DEVERDAD", waste)
    }
    loadWaste();

  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-gray-505 text-white">
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
      <WasteCards list={waste} />
    </div>
  )
}

export default WasteList
