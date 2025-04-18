export interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export const slides: Slide[] = [
  {
    image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1744970489/hero2_carbrw.svg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "30 DAY\nTRANSFORMATION",
    subtitle: "JOIN THE CHALLENGE",
    description: "Transform your body and mind with my signature 30-day fitness challenge. Get personalized workouts, nutrition plans, and daily motivation to achieve your goals.",
    cta: "START YOUR JOURNEY"
  },
  {
    image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739446329/photo-6330_o77bjm.jpg",
    title: "EXPERT\nGUIDANCE",
    subtitle: "TRAIN WITH ABHIJIT",
    description: "Benefit from my decade of experience in fitness training. I'll help you build strength, improve endurance, and develop healthy habits that last a lifetime.",
    cta: "BOOK A SESSION"
  },
  {
    image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739446329/photo-6324_m8iils.jpg",
    title: "STATE OF ART\nFACILITY",
    subtitle: "TRAIN IN STYLE",
    description: "Experience training in our modern, fully-equipped gym facility. Access top-quality equipment and a motivating environment to reach your fitness goals.",
    cta: "EXPLORE GYM"
  }
];
