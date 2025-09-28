import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Star, MapPin, Clock } from "lucide-react";

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      description: "Experience the ultimate adventure to the base of world's highest peak",
      duration: "14 Days",
      groupSize: "2-12 People",
      difficulty: "Challenging",
      rating: 4.9,
      price: "$2,500",
      image: "🏔️",
      highlights: ["Everest Base Camp", "Sagarmatha National Park", "Sherpa Culture", "Kala Patthar"]
    },
    {
      id: 2,
      title: "Annapurna Circuit Trek",
      description: "Classic trek through diverse landscapes and traditional villages",
      duration: "12 Days",
      groupSize: "2-15 People",
      difficulty: "Moderate",
      rating: 4.8,
      price: "$1,800",
      image: "🌄",
      highlights: ["Thorong La Pass", "Muktinath Temple", "Diverse Landscapes", "Local Villages"]
    },
    {
      id: 3,
      title: "Kathmandu Valley Cultural Tour",
      description: "Explore UNESCO World Heritage sites and ancient temples",
      duration: "3 Days",
      groupSize: "1-20 People",
      difficulty: "Easy",
      rating: 4.7,
      price: "$450",
      image: "🏛️",
      highlights: ["Durbar Squares", "Swayambhunath", "Boudhanath", "Pashupatinath"]
    },
    {
      id: 4,
      title: "Chitwan National Park Safari",
      description: "Wildlife adventure in Nepal's premier national park",
      duration: "4 Days",
      groupSize: "2-10 People",
      difficulty: "Easy",
      rating: 4.6,
      price: "$650",
      image: "🐅",
      highlights: ["Royal Bengal Tiger", "One-horned Rhino", "Elephant Safari", "Tharu Culture"]
    },
    {
      id: 5,
      title: "Pokhara Lakeside & Adventure",
      description: "Scenic beauty, adventure sports, and relaxation combined",
      duration: "5 Days",
      groupSize: "1-15 People",
      difficulty: "Easy",
      rating: 4.8,
      price: "$750",
      image: "🏞️",
      highlights: ["Phewa Lake", "Paragliding", "Sarangkot Sunrise", "World Peace Pagoda"]
    },
    {
      id: 6,
      title: "Langtang Valley Trek",
      description: "Beautiful valley trek close to Kathmandu with stunning views",
      duration: "8 Days",
      groupSize: "2-12 People",
      difficulty: "Moderate",
      rating: 4.7,
      price: "$1,200",
      image: "🏔️",
      highlights: ["Langtang Lirung", "Kyanjin Gompa", "Tamang Culture", "Alpine Lakes"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'challenging':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover Nepal Tour Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From majestic Himalayan treks to cultural heritage tours, find your perfect Nepal adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl">{pkg.image}</div>
                  <Badge className={getDifficultyColor(pkg.difficulty)}>
                    {pkg.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {pkg.groupSize}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                    <span className="font-medium">{pkg.rating}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {pkg.price}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Highlights:</div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {highlight}
                      </Badge>
                    ))}
                    {pkg.highlights.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{pkg.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;