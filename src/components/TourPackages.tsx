import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { tourPackages } from "@/data/tourPackages";

const TourPackages = () => {

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tourPackages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-3">
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

                <div className="text-xl md:text-2xl font-bold text-primary text-right">
                  ${pkg.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">per person</span>
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
                  <Link to={`/book-now?id=${pkg.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Book Now
                    </Button>
                  </Link>
                  <Link to={`/tour-details?id=${pkg.id}`}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
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