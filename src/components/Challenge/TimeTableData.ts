export interface TimeTableSession {
  day: string;
  time: string;
  workout: string;
  trainer: string;
}

export const timeTableData: TimeTableSession[] = [
  {
    day: "Monday",
    time: "9:00 PM",
    workout: "Upper Body Workouts",
    trainer: "Abhijit Naik"
  },
  {
    day: "Tuesday",
    time: "9:00 PM",
    workout: "Lower Body Workouts",
    trainer: "Abhijit Naik"
  },
  {
    day: "Wednesday",
    time: "9:00 PM",
    workout: "HIIT & Cardio",
    trainer: "Abhijit Naik"
  },
  {
    day: "Thursday",
    time: "9:00 PM",
    workout: "Strength Training",
    trainer: "Abhijit Maik"
  },
  {
    day: "Friday",
    time: "9:00 PM",
    workout: "TABATA/EMOM",
    trainer: "Abhijit Naik"
  },
  {
    day: "Saturday",
    time: "-",
    workout: "Rest Day",
    trainer: "Abhijit Naik"
  }
];
