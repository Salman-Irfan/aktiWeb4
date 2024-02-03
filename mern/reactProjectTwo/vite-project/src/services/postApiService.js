import axios from "axios"
import BASE_URL, { APIVersion1 } from "../constants/urls/urls"

const postApiService = async  (endPoint, formData) => {
    const response = await axios.post(`${BASE_URL}${APIVersion1}${endPoint}`, formData)
    return response
}

export default postApiService