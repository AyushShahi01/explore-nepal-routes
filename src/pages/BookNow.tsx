import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, Shield, CreditCard, 
  CheckCircle, Clock, MapPin, Loader2
} from "lucide-react";
import { getTourById, type TourPackage } from "@/data/tourPackages";

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const tourId = parseInt(searchParams.get('id') || '1');
  const [tour, setTour] = useState<TourPackage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTour = async () => {
      try {
        setLoading(true);
        const tourData = await getTourById(tourId);
        setTour(tourData || null);
      } catch (error) {
        console.error("Failed to load tour:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTour();
  }, [tourId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
            <p className="text-muted-foreground mb-6">The tour you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-20 pb-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/tour-details?id=${tourId}`} className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tour Details
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Adventure
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete your booking for {tour.title}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Booking Information</CardTitle>
                  <p className="text-muted-foreground">
                    Please fill in your details to complete your booking
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-8">
                    
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input id="fullName" placeholder="Enter your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" placeholder="+1 234 567 8900" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nationality">Nationality *</Label>
                          <Input id="nationality" placeholder="e.g., American" required />
                        </div>
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Travel Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="travelDate">Preferred Start Date *</Label>
                          <Input id="travelDate" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="groupSize">Number of Travelers *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Person</SelectItem>
                              <SelectItem value="2">2 People</SelectItem>
                              <SelectItem value="3">3 People</SelectItem>
                              <SelectItem value="4">4 People</SelectItem>
                              <SelectItem value="5">5+ People</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="special">Special Requests or Requirements</Label>
                        <Textarea 
                          id="special" 
                          placeholder="Dietary requirements, medical conditions, or any special requests..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Emergency Contact</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyName">Contact Name *</Label>
                          <Input id="emergencyName" placeholder="Full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                          <Input id="emergencyPhone" placeholder="+1 234 567 8900" required />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button className="w-full" size="lg">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Continue to Payment
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        🔒 Secure payment • Free cancellation up to 30 days before departure
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="space-y-6">
              
              {/* Tour Summary */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Tour Info */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">{tour.title}</h4>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Nepal Himalayas
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Base Price (1 person)</span>
                        <span>${tour.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Government Tax (13%)</span>
                        <span>${Math.round(tour.price * 0.13)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Service Charge</span>
                        <span>$50</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total Amount</span>
                          <span>${tour.price + Math.round(tour.price * 0.13) + 50}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Secure Booking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SSL encrypted secure payment</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Free cancellation up to 30 days</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Licensed & insured operator</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our travel experts are here to assist you
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Phone:</strong> +977-1-4123456</p>
                      <p><strong>Email:</strong> info@mahalaxmi.com</p>
                      <p><strong>WhatsApp:</strong> +977-9841234567</p>
                    </div>
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

export default BookNow;