import axios from "axios"
import BASE_URL, { APIVersion1 } from "../constants/urls/urls"

const getApiService = async (endPoint) => {
    const response = await axios.get(`${BASE_URL}${APIVersion1}${endPoint}`)
    return response
}

export default getApiService