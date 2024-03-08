import { useEffect, useState } from "react"
import { getWasteList } from "../api/waste.api"
import WasteCards from "./Wastecards";

const WasteList = () => {
  const [waste, setwaste] = useState([])
//   const array = [
//     {
//         "id": 1,
//         "img": "https://lavaquita.co/cdn/shop/products/76b6170a-f1e1-4a92-8622-cee94a659b91_669x669.png?v=1622197616",
//         "description": "banana",
//         "label": "verde"
//     },
//     {
//         "id": 2,
//         "img": "https://abdc.es/wp-content/uploads/2022/01/residuos-reciclables-1536x821.jpeg",
//         "description": "reciclable",
//         "label": "blanco"
//     }
// ]

  useEffect(() => {

    async function loadWaste() {
      const res = await getWasteList();
      setwaste(res.data);
      console.log("DEVERDAD",waste)
    }
    loadWaste();

  }, []);


  return (
    <div className="flex ">
      <WasteCards list={waste}/>
      {/* {
        waste.map((t) => (
          <div key={t.id}>
          <img src={t.img} alt="" />
          <p>{t.description}</p>
          <p>{t.label}</p>
          </div>
        ))
      } */}
    </div>
  )
}

export default WasteList
