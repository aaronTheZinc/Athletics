import config from "../config"
import axios from "axios"
import { HomePageProps } from "../interfaces"
const { endPoint } = config

export const loadHomePage = async(): Promise<HomePageProps> => {
   const { status, data } = await axios.get(`${endPoint}/content/home`)
   console.log("api response", data)
    return {
        events: data
    } 
}

