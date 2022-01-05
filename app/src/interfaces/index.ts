export interface Athlete {
  firstName: string;
  lastName: string;
  grade: string;
  sport: string;
  position: string;
  jerseyNumber: number;
}

export interface SportEvent {
  eventName: string;
  time: string;
  team: string;
  description: string;
  opponent: string;
  sport: string;
}

export interface Event<T> {
  name: string;
  time: string;
  meta: T;
}
export interface HomePageProps {
  events: Event<SportEvent>[];
  status?: number;
}
export interface SportScheduleTableProps {
  columns: {
    title: string;
    dataIndex: string;
    key: string;
  }[];
  data: SportSchduleTableRow[];
}
export interface SportSchduleTableRow {
  key: string;
  name: string;
  title: string;
  date: string;
  time: string;
  location: string;
}
export interface FootballPageProps {
  roster: Athlete[];
  news: any[];
}
export interface Sport {
  title: string;
  roster?: Athlete[];
  sport?: string;
  wins?: number;
  losses?: number;
  schedule?: {
    time: string;
    location: string;
    day: string;
    title: string;
  }[];
}
export interface AppContextType {
  sport: string;
  setSport: (s: string) => void;
}
