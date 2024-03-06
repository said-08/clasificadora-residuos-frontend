import { useEffect, useState } from "react"
import { getWasteList } from "../api/waste.api"

const WasteList = () => {
  const [waste, setwaste] = useState([])

  useEffect(() => {

    async function loadWaste() {
      const res = await getWasteList();
      setwaste(res.data);
    }

    loadWaste();

  }, []);


  return (
    <div>
      {
        waste.map((t) => (
          <div key={t.id}>
          <img src={t.img} alt="" />
          <p>{t.description}</p>
          <p>{t.label}</p>
          </div>
        ))
      }
    </div>
  )
}

export default WasteList
