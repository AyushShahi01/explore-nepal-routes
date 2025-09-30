import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Users, Star, MapPin, Clock, CheckCircle, 
  Mountain, Camera, Utensils, Bed, ArrowLeft, Heart
} from "lucide-react";
import { getTourById, getDifficultyColor } from "@/data/tourPackages";

const TourDetails = () => {
  const [searchParams] = useSearchParams();
  const tourId = parseInt(searchParams.get('id') || '1');

  const tour = getTourById(tourId) || getTourById(1)!;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className={getDifficultyColor(tour.difficulty)}>
                  {tour.difficulty}
                </Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                  <span className="font-medium">{tour.rating}</span>
                  <span className="text-muted-foreground ml-1">(127 reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {tour.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {tour.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {tour.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {tour.groupSize}
                </div>
                <div className="flex items-center">
                  <Mountain className="h-4 w-4 mr-2" />
                  {tour.difficulty} Level
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  ${tour.price}
                  <span className="text-base md:text-lg font-normal text-muted-foreground ml-2">per person</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Heart className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Save</span>
                  </Button>
                  <Link to={`/book-now?id=${tourId}`} className="w-full sm:w-auto">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Tour Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tour.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Detailed Itinerary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tour.itinerary.map((day: string, index: number) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4">
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold -ml-[13px] mr-3 flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-foreground">{day}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What's Included/Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.included.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">What's Not Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.excluded.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="w-4 h-4 border border-red-300 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Booking Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book This Tour</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">${tour.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Group Size:</span>
                      <span className="font-medium">{tour.groupSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <Badge className={getDifficultyColor(tour.difficulty)} variant="outline">
                        {tour.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Link to={`/book-now?id=${tourId}`}>
                      <Button className="w-full" size="lg">
                        Book Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Save for Later
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Bed className="h-4 w-4 mr-3 text-primary" />
                    <span>Tea house accommodation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Utensils className="h-4 w-4 mr-3 text-primary" />
                    <span>All meals included</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mountain className="h-4 w-4 mr-3 text-primary" />
                    <span>Experienced guide</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-3 text-primary" />
                    <span>Porter service included</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetails;