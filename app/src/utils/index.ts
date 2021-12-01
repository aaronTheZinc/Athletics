export const sportCodeToName = (s: string) => {
  switch (s) {
    case "b-basketball":
      return "Boys Basketball";
    case "l-basketball":
      return "Girls BasketBall";
    case "Football":
      return "Football";
    default:
      return s;
  }
};

export const genderSportCode = (sport: string, gender: string) => {
  switch (sport) {
    case "basketball":
      return gender == "Boys" ? "b-basketball" : "l-basketball";

    default:
      return sport.toLowerCase();
  }
};
