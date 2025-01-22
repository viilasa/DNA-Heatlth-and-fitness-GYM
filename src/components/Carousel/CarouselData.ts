export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

export const carouselItems: CarouselItem[] = [
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Personal Training",
    description: "One-on-one sessions with expert trainers"
  },
  {
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Group Fitness",
    description: "High-energy group workout sessions"
  },
  {
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Nutrition Planning",
    description: "Customized meal plans for your goals"
  }
];