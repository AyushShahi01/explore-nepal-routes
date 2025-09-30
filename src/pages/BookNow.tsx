import { useSearchParams, Link } from "react-router-dom";
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
  ArrowLeft, Users, Shield, CreditCard, 
  CheckCircle, Clock, MapPin, Star
} from "lucide-react";
import { getTourById, getDifficultyColor } from "@/data/tourPackages";

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const tourId = parseInt(searchParams.get('id') || '1');

  const tour = getTourById(tourId) || getTourById(1)!;

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
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter your last name" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" placeholder="Enter your phone number" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nationality">Nationality *</Label>
                          <Input id="nationality" placeholder="e.g., American, British" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age">Age *</Label>
                          <Input id="age" type="number" placeholder="Enter your age" required />
                        </div>
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div className="space-y-6">
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
                              <SelectValue placeholder="Select group size" />
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
                        <Label htmlFor="fitness">Fitness Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your fitness level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="experienced">Experienced</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dietary">Dietary Requirements</Label>
                        <Input id="dietary" placeholder="e.g., Vegetarian, Vegan, Allergies" />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="experience">Previous Trekking Experience</Label>
                        <Textarea 
                          id="experience" 
                          placeholder="Tell us about your previous trekking or hiking experience..."
                          rows={3}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="medical">Medical Conditions</Label>
                        <Textarea 
                          id="medical" 
                          placeholder="Please mention any medical conditions, medications, or health concerns..."
                          rows={3}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="special">Special Requests</Label>
                        <Textarea 
                          id="special" 
                          placeholder="Any special requests, celebrations, or customizations..."
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Emergency Contact</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyName">Contact Name *</Label>
                          <Input id="emergencyName" placeholder="Emergency contact name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                          <Input id="emergencyPhone" placeholder="Emergency contact phone" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="relationship">Relationship</Label>
                        <Input id="relationship" placeholder="e.g., Spouse, Parent, Friend" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button className="w-full" size="lg">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Proceed to Payment
                      </Button>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        You will be redirected to secure payment gateway
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
                    <h4 className="font-semibold">{tour.title}</h4>
                    
                    <div className="flex items-center gap-2">
                      <Badge className={getDifficultyColor(tour.difficulty)} variant="outline">
                        {tour.difficulty}
                      </Badge>
                      <div className="flex items-center text-sm">
                        <Star className="h-3 w-3 text-yellow-500 mr-1 fill-current" />
                        {tour.rating}
                      </div>
                    </div>
                    
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