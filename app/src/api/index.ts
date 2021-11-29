import config from "../config";
import axios from "axios";
import { FootballPageProps, HomePageProps, Sport } from "../interfaces";
const { endPoint } = config;

export const loadHomePage = async (): Promise<HomePageProps> => {
  const { status, data } = await axios.get(`${endPoint}/content/home`);
  return {
    events: data,
  };
};

export const loadFootballPage = async (): Promise<FootballPageProps> => {
  const { status, data } = await axios.get(
    `${endPoint}/content/roster?sport=football`
  );
  return {
    roster: data,
    news: [],
  };
};

export const loadSportData = async (sport: string): Promise<Sport> => {
  const { data } = await axios.get(`${endPoint}/content/sport?sport=${sport}`);
  return data;
};
