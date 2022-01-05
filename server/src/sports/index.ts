import { Tables } from "../types"
const sports = [
    {
        title: "Girls Varisty Basketball",
        table: Tables.VarsityLadiesBasketBall,
        schedule: Tables.VarsityLadiesBasketBallSchedule,
        gender: "girls",
        sport: "basketball",
        varsity: true
    },
    {
        title: "Girls JV Basketball",
        table: Tables.JVGirlsBasketball,
        schedule: Tables.JVBasketballGirlsSchedule,
        gender: "girls",
        varsity: false,
        sport: "basketball"
    },
    {
        title: "Boys Varsity Basketball",
        table: Tables.VarsityBoysBasketball,
        schedule: Tables.VarsityBoysBasketballSchedule,
        gender: "boys",
        varsity: true,
        sport: "basketball"
    },
    {
        title: "Boys JV Basketball",
        table: Tables.JVBoysBasketball,
        schedule: Tables.JVBoysBasketballSchedule,
        gender: "boys",
        varsity: false,
        sport: "basketball"
    },
    {
        title: "JV Football",
        table: Tables.JVFootball,
        schedule: Tables.JVFootballSchedule,
        gender: "boys",
        varsity: false,
        sport: "football"
    },
    {
        title: "Varsity Football",
        table: Tables.VarsityFootball,
        schedule: Tables.VarsityFootballSchedule,
        gender: "boys",
        varsity: true,
        sport: "football"
    },
]

export const findSport = ({ gender, sport, isVarsity }: any) => {
    console.log(gender, sport, isVarsity)
    return sports.filter(({ varsity, sport: _sport, gender: _gender }) => {
        if (sport === "football") {
            gender = "boys"
        }
        if (varsity === isVarsity && sport === _sport && gender === _gender) {
            return true;
        } else {
            return false;
        }
    })[0]
}