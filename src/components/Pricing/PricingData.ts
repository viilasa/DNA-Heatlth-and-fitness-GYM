interface PricingDuration {
  duration: string;
  regularPrice: number;
  salePrice: number;
}

export interface PricingPlan {
  title: string;
  description: string;
  features: string[];
  durations: PricingDuration[];
  tag?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "General Package",
    description: "Full access to gym facilities and equipment",
    features: [
      "Access to all gym equipment",
      
      "Free fitness assessment",
      "Access to group classes",
      "Flexible timing"
    ],
    durations: [
      { duration: "Monthly", regularPrice: 3000, salePrice: 1800 },
      { duration: "3 Months", regularPrice: 5400, salePrice: 4800 },
      { duration: "4 Months", regularPrice: 7200, salePrice: 6400 },
      { duration: "6 Months", regularPrice: 96000, salePrice: 13900 },
      { duration: "Yearly", regularPrice: 15000, salePrice: 12500 }
    ]
  },
  {
    title: "Student Package",
    description: "Special rates for students with valid ID",
    features: [
      "Valid student ID required",
      "Access to all gym equipment",
      
      "Free fitness assessment",
      "Student community events"
    ],
    durations: [
      { duration: "Monthly", regularPrice: 2500, salePrice: 1500 },
      { duration: "3 Months", regularPrice: 6000, salePrice: 4000 },
      { duration: "6 Months", regularPrice: 10000, salePrice: 7000 },
      { duration: "Yearly", regularPrice: 15000, salePrice: 12000 }
    ],
    tag: "Student Special"
  },
  {
    title: "Short Term Package",
    description: "Flexible short-term access options",
    features: [
      "Minimum 1 week commitment",
      "Access to all gym equipment",
      
      "Perfect for visitors",
      "No long-term contract"
    ],
    durations: [
      { duration: "Daily", regularPrice: 350, salePrice: 200 },
      { duration: "weekly", regularPrice: 1400, salePrice: 1000 },
      { duration: "15 Days", regularPrice: 1500, salePrice: 1250 }
    ],
    tag: "Flexible"
  },
  {
    title: "Personal Training",
    description: "One-on-one training with expert coaches",
    features: [
      "+ Gym Fees ",
      "Personalized workout plans",
      "Nutrition guidance",
      "Progress tracking",
      "Form correction",
      "Goal-specific training"
    ],
    durations: [
      { duration: "Monthly", regularPrice: 9000, salePrice: 5000  },
      { duration: "3 Months", regularPrice: 25000, salePrice: 12500 },
      { duration: "6 Months ", regularPrice: 45000, salePrice: 24000 }
    ],
    tag: "Most Popular"
  },
  {
    title: "Couple Training",
    description: "Train together with personalized guidance",
    features: [
      "+ Gym Fees ",
      "Partner workouts",
      "Shared personal trainer",
      "Customized programs",
      "Progress tracking",
      "Flexible scheduling"
    ],
    durations: [
      { duration: "Monthly", regularPrice: 9200, salePrice: 8200 },
    
    ],
    tag: "Better Together"
  }
];