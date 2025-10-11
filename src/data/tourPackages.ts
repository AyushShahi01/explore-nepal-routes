import everestImage from "@/assets/everest-trek.jpg";
import annapurnaImage from "@/assets/annapurna-trek.jpg";
import kathmanduImage from "@/assets/kathmandu-cultural.jpg";
import chitwanImage from "@/assets/chitwan-safari.jpg";
import pokharaImage from "@/assets/nepal-pokhara.jpg";
import langtangImage from "@/assets/langtang-trek.jpg";

export interface TourPackage {
  id: number;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  price: number;
  image: string;
  highlights: string[];
  itinerary: string[];
  included: string[];
  excluded: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    description: "Experience the ultimate adventure to the base of world's highest peak. This legendary trek takes you through the heart of the Khumbu region, offering spectacular mountain views, rich Sherpa culture, and the achievement of reaching Everest Base Camp at 5,364m.",
    duration: "14 Days",
    groupSize: "2-12 People",
    price: 2500,
    image: everestImage,
    highlights: ["Everest Base Camp (5,364m)", "Sagarmatha National Park", "Sherpa Culture", "Kala Patthar (5,545m)", "Tengboche Monastery", "Namche Bazaar"],
    itinerary: [
      "Day 1: Fly to Lukla (2,840m), trek to Phakding (2,610m)",
      "Day 2: Trek to Namche Bazaar (3,440m)",
      "Day 3: Acclimatization day in Namche",
      "Day 4: Trek to Tengboche (3,860m)",
      "Day 5: Trek to Dingboche (4,410m)",
      "Day 6: Acclimatization day in Dingboche",
      "Day 7: Trek to Lobuche (4,910m)",
      "Day 8: Trek to Everest Base Camp (5,364m) via Gorak Shep",
      "Day 9: Climb Kala Patthar (5,545m), return to Pheriche",
      "Day 10-14: Return journey to Lukla"
    ],
    included: [
      "Domestic flights (Kathmandu-Lukla-Kathmandu)",
      "Accommodation in tea houses/lodges",
      "All meals during the trek",
      "Experienced English-speaking guide",
      "Porter service (1 porter for 2 trekkers)",
      "All permits and entrance fees",
      "First aid kit and emergency assistance"
    ],
    excluded: [
      "International flights",
      "Nepal entry visa fees",
      "Travel insurance",
      "Personal expenses and tips",
      "Alcoholic beverages and bottled water",
      "Emergency evacuation costs"
    ]
  },
  {
    id: 2,
    title: "Annapurna Circuit Trek",
    description: "Classic trek through diverse landscapes and traditional villages. Experience the dramatic changes in scenery from lush green valleys to high alpine desert, cross the challenging Thorong La Pass, and immerse yourself in local culture.",
    duration: "12 Days",
    groupSize: "2-15 People",
    price: 1800,
    image: annapurnaImage,
    highlights: ["Thorong La Pass (5,416m)", "Muktinath Temple", "Diverse Landscapes", "Local Villages", "Annapurna Range Views", "Manang Valley"],
    itinerary: [
      "Day 1: Drive to Besisahar, trek to Bhulbhule",
      "Day 2: Trek to Chame (2,710m)",
      "Day 3: Trek to Pisang (3,300m)",
      "Day 4: Trek to Manang (3,519m)",
      "Day 5: Acclimatization day in Manang",
      "Day 6: Trek to Yak Kharka (4,110m)",
      "Day 7: Trek to Thorong Phedi (4,450m)",
      "Day 8: Cross Thorong La Pass, descent to Muktinath",
      "Day 9: Trek to Marpha (2,670m)",
      "Day 10-12: Return journey via Pokhara"
    ],
    included: [
      "Airport transfers",
      "Accommodation in tea houses",
      "All meals during trek",
      "Professional guide and porter",
      "All permits and fees",
      "Transportation as per itinerary"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Emergency evacuation",
      "Tips for guide and porter"
    ]
  },
  {
    id: 3,
    title: "Kathmandu Valley Cultural Tour",
    description: "Explore UNESCO World Heritage sites and ancient temples",
    duration: "3 Days",
    groupSize: "1-20 People",
    price: 450,
    image: kathmanduImage,
    highlights: ["Durbar Squares", "Swayambhunath", "Boudhanath", "Pashupatinath"],
    itinerary: [
      "Day 1: Kathmandu Durbar Square, Swayambhunath Stupa",
      "Day 2: Bhaktapur Durbar Square, Patan Durbar Square",
      "Day 3: Boudhanath Stupa, Pashupatinath Temple"
    ],
    included: [
      "All entrance fees",
      "Professional guide",
      "Private transportation",
      "Hotel pickup and drop-off"
    ],
    excluded: [
      "Meals and drinks",
      "Personal expenses",
      "Tips for guide and driver"
    ]
  },
  {
    id: 4,
    title: "Chitwan National Park Safari",
    description: "Wildlife adventure in Nepal's premier national park",
    duration: "4 Days",
    groupSize: "2-10 People",
    price: 650,
    image: chitwanImage,
    highlights: ["Royal Bengal Tiger", "One-horned Rhino", "Elephant Safari", "Tharu Culture"],
    itinerary: [
      "Day 1: Arrival at Chitwan, jungle orientation",
      "Day 2: Jungle safari, elephant ride",
      "Day 3: Canoe ride, jungle walk, Tharu cultural program",
      "Day 4: Bird watching, departure"
    ],
    included: [
      "Full board accommodation",
      "All jungle activities",
      "National park fees",
      "Naturalist guide"
    ],
    excluded: [
      "Transportation to/from Chitwan",
      "Alcoholic beverages",
      "Personal expenses"
    ]
  },
  {
    id: 5,
    title: "Pokhara Lakeside & Adventure",
    description: "Scenic beauty, adventure sports, and relaxation combined",
    duration: "5 Days",
    groupSize: "1-15 People",
    price: 750,
    image: pokharaImage,
    highlights: ["Phewa Lake", "Paragliding", "Sarangkot Sunrise", "World Peace Pagoda"],
    itinerary: [
      "Day 1: Arrival, Phewa Lake boating",
      "Day 2: Paragliding adventure, Davis Fall",
      "Day 3: Sarangkot sunrise, World Peace Pagoda",
      "Day 4: Mountain biking, International Mountain Museum",
      "Day 5: Departure"
    ],
    included: [
      "Hotel accommodation",
      "Breakfast daily",
      "Airport transfers",
      "Sightseeing as per itinerary"
    ],
    excluded: [
      "Paragliding cost",
      "Lunch and dinner",
      "Personal expenses"
    ]
  },
  {
    id: 6,
    title: "Langtang Valley Trek",
    description: "Beautiful valley trek close to Kathmandu with stunning views",
    duration: "8 Days",
    groupSize: "2-12 People",
    price: 1200,
    image: langtangImage,
    highlights: ["Langtang Lirung", "Kyanjin Gompa", "Tamang Culture", "Alpine Lakes"],
    itinerary: [
      "Day 1: Drive to Syabrubesi",
      "Day 2: Trek to Lama Hotel",
      "Day 3: Trek to Langtang village",
      "Day 4: Trek to Kyanjin Gompa",
      "Day 5: Explore Kyanjin Ri",
      "Day 6-8: Return journey to Kathmandu"
    ],
    included: [
      "Transportation",
      "Lodge accommodation",
      "All meals during trek",
      "Guide and porter",
      "All permits"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ]
  }
];

export const getTourById = (id: number): TourPackage | undefined => {
  return tourPackages.find(tour => tour.id === id);
};
