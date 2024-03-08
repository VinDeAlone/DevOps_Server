import axios from 'axios'

export const getAllData = () => axios.get("http://localhost:8122/demo")

export const createNewDemo = (data) => axios.post("http://localhost:8122/demo", data)