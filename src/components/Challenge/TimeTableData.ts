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
    trainer: "Abhijit Kumar"
  },
  {
    day: "Tuesday",
    time: "9:00 PM",
    workout: "Lower Body Workouts",
    trainer: "Abhijit Kumar"
  },
  {
    day: "Wednesday",
    time: "9:00 PM",
    workout: "HIIT & Cardio",
    trainer: "Abhijit Kumar"
  },
  {
    day: "Thursday",
    time: "9:00 PM",
    workout: "Strength Training",
    trainer: "Abhijit Kumar"
  },
  {
    day: "Friday",
    time: "9:00 PM",
    workout: "TABATA/EMOM",
    trainer: "Abhijit Kumar"
  },
  {
    day: "Saturday",
    time: "9:00 PM",
    workout: "Combat Training",
    trainer: "Abhijit Kumar"
  }
];