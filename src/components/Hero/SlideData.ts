export interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "BE STRONG\nTRAINING HARD",
    subtitle: "SHAPE YOUR BODY",
    description: "Transform your physique with our state-of-the-art facilities and expert trainers. Experience personalized workout plans designed to maximize your results and achieve your fitness goals.",
    cta: "START YOUR JOURNEY"
  },
  {
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "GET FIT\nSTAY HEALTHY",
    subtitle: "TRANSFORM YOUR LIFE",
    description: "Discover a holistic approach to fitness that combines strength training, cardio, and nutrition guidance. Our comprehensive programs help you build lasting healthy habits for life.",
    cta: "JOIN NOW"
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "TRAIN SMART\nLIVE BETTER",
    subtitle: "ACHIEVE YOUR GOALS",
    description: "Access cutting-edge training methods and expert coaching to optimize your workouts. Our smart training approach ensures efficient progress while preventing injuries.",
    cta: "LEARN MORE"
  },
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "PUSH HARDER\nGO FURTHER",
    subtitle: "EXCEED YOUR LIMITS",
    description: "Challenge yourself in our high-intensity training zones designed for maximum results. Experience breakthrough moments as you push past your perceived limitations.",
    cta: "PUSH YOUR LIMITS"
  },
  {
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "REACH GOALS\nSTAY FOCUSED",
    subtitle: "EMBRACE THE CHALLENGE",
    description: "Set ambitious fitness goals and achieve them with our structured training programs. Our supportive community keeps you motivated throughout your fitness journey.",
    cta: "GET STARTED"
  }
];