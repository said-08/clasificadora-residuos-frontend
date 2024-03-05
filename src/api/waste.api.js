import axios from "axios";

export const getWasteList = () => {
  return axios.get('http://localhost:8000/waste/api/waste/')
}
