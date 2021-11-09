import config from "../config"
import axios from "axios"
import { FootballPageProps, HomePageProps } from "../interfaces"
const { endPoint } = config

export const loadHomePage = async(): Promise<HomePageProps> => {
   const { status, data } = await axios.get(`${endPoint}/content/home`)
    return {
        events: data
    } 
}

export const loadFootballPage = async(): Promise<FootballPageProps> => {
    const { status, data} = await axios.get(`${endPoint}/content/roster?sport=football`)
    return {
        roster: data,
        news: []
    }
}
