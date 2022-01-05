interface SportData {
  gender: string;
  varsity: boolean;
  sport: string;
}
export const sportCodeToName = (s: string, isVarsity: boolean) => {
  if (isVarsity) {
    switch (s) {
      case "vb-basketball":
        return "Boys Basketball";
      case "vl-basketball":
        return "Girls BasketBall";
      case "Football":
        return "Football";
      default:
        return s;
    }
  } else {
    switch (s) {
      case "b-basketball":
        return "j-basketball";
      case "l-basketball":
        return "jl-basketball";
      default:
        return s;
    }
  }
};

export const dataToSportId = ({
  varsity,
  gender,
  sport,
}: SportData): string => {
  if (varsity) {
    if (gender === "boy") {
      switch (sport) {
        case "basketball":
          return "vb-basketball";
        case "football":
          return "football";

        default:
          return sport;
      }
    }
  }
};

export const genderToSportCode = (sport: string, gender: string) => {
  switch (sport) {
    case "basketball":
      return gender == "Boys" ? "b-basketball" : "l-basketball";

    default:
      return sport.toLowerCase();
  }
};
