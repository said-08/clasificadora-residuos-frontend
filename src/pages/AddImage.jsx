/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { addWasteImage } from "../api/waste.api";

function AddImage() {
  const [desc, setDesc] = useState('');
  const [main, setMain] = useState('')
  const [images, setImages] = useState([]);
  const [formData, setformData] = useState({
    description: '',
    img: ''
  })

  const handleImageChange = (event) => {
    const files = event.target.files;
    console.log("IMAGAENASD", images)
    console.log("iamgs", files)
    const newImages = Array.from(files).map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      preview: ['jpg', 'jpeg', 'png', 'gif'].includes(file.name.split('.').pop().toLowerCase()),
      size: file.size > 1024 ? file.size > 1048576 ? Math.round(file.size / 1048576) + 'mb' : Math.round(file.size / 1024) + 'kb' : file.size + 'b'
    }));
    setImages(newImages);
    setformData(prevState => ({
      ...prevState,
      img: files[0]
    }));
  };

  const handleSubmit = async () => {
    if (images.length > 0) {
      console.log(formData)
        const config = { headers: { 'Content-Type': 'multipart/form-data' }}
        // const formDatas = new FormData();
        // formDatas.append('img', formData.img[0].url); // Solo agregamos la primera imagen
        // formDatas.append('description', form); // Solo agregamos la primera imagen
        const res = await addWasteImage({
          'img': formData.img,
          'description': formData.description
        }, config);
        console.log("image", res);
        setMain(res.data.label)
    } else {
      console.warn("No se ha seleccionado ninguna imagen");
    }
  };

  const handleText = (e) => {
    const text = e.target.value;
    setDesc(e.target.value);
    setformData(prevState => ({
      ...prevState,
      'description': text
    }));
  }

  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className="shadow p-4 py-8" x-data="{ images: [] }">
      <div className="heading text-center font-bold text-2xl m-5 text-white">New Image</div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <textarea onChange={(e) => handleText(e)} className="description sec p-3 bg-[#202020] text-yellow-50 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe la imagen de residuos (opcional)"></textarea>

        {/* Icons */}
        <div className="icons flex text-gray-500 m-2">
          <label id="select-image">
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            <input hidden type="file" onChange={handleImageChange} />
          </label>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>

        {/* Preview image here */}
        <div id="preview" className="my-4 flex">
          {images.map((image, index) => (
            <div key={index} className="relative w-32 h-32 object-cover rounded">
              {image.preview ? (
                <img src={image.url} className="w-32 h-32 object-cover rounded" />
              ) : (
                <svg className="fill-current  w-32 h-32 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                </svg>
              )}
              <button onClick={() => setImages(images.filter((_, i) => i !== index))} className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"><span className="mx-auto">×</span></button>
              <div className="text-xs text-center p-2">{image.size}</div>
            </div>
          ))}
        </div>

        <div className="buttons flex justify-end">
          <div onClick={handleSubmit} className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Clasificar</div>
        </div>
      </div>
      {
        main && (
          <div className="flex justify-center items-center h-screen">
          <div x-data="{ open: true }">
            <button x-on:click="open = true" className="px-4 py-2 bg-indigo-500 text-white rounded-md"> Open Modal </button>
            <div x-show="open" className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
              <div x-show="open" x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div x-show="open" x-transition:enter="transition-transform ease-out duration-300" x-transition:enter-start="transform scale-75" x-transition:enter-end="transform scale-100" x-transition:leave="transition-transform ease-in duration-300" x-transition:leave-start="transform scale-100" x-transition:leave-end="transform scale-75" className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
                <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between">
                  <h2 className="text-lg font-semibold">Modal Title</h2>
                </div>
                <div className="p-4 bg-slate-800">
                  <p>Debería ir en la caneca de color {main}</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
          )
      }
      
    </div>
  )
}

export default AddImage
