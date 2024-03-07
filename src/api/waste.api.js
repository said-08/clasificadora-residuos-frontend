import axios from "axios";

// const baseURL = 'http://localhost:8000/waste/api/waste/';

// const axiosInstace = axios.create({
//   baseURL: baseURL,
// 	headers: {
// 		'Content-Type': 'application/json',
// 		accept: 'application/json',
// 	},
// })

export const getWasteList = () => {
  return axios.get('http://localhost:8000/waste/api/waste/')
}

export const addWasteImage = (data, config) => {
  return axios.post('http://localhost:8000/waste/api/waste/', data, config)
}
