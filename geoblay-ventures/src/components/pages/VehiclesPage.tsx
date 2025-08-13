/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  Car,
  Search,
  Filter,
  Star,
  Heart,
  Eye,
  Calendar,
  Fuel,
  Settings,
  Users,
  Truck,
  Zap,
} from 'lucide-react';

interface VehiclesPageProps {
  setCurrentPage: (page: string) => void;
}

export function VehiclesPage({ setCurrentPage }: VehiclesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const vehicleTypes = [
    { id: 'all', name: 'All Vehicles', icon: Car },
    { id: 'sedan', name: 'Sedan', icon: Car },
    { id: 'suv', name: 'SUV', icon: Truck },
    { id: 'electric', name: 'Electric', icon: Zap },
    { id: 'luxury', name: 'Luxury', icon: Star },
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz C-Class',
      category: 'luxury',
      price: '$45,900',
      year: 2023,
      mileage: '12,000 miles',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      seats: 5,
      rating: 4.8,
      image: Car,
      condition: 'Excellent',
      badge: 'Certified Pre-Owned',
      features: ['Leather Seats', 'Navigation', 'Sunroof', 'Premium Audio']
    },
    {
      id: 2,
      name: 'Tesla Model 3',
      category: 'electric',
      price: '$42,000',
      year: 2024,
      mileage: '5,000 miles',
      fuel: 'Electric',
      transmission: 'Automatic',
      seats: 5,
      rating: 4.9,
      image: Zap,
      condition: 'Like New',
      badge: 'Low Mileage',
      features: ['Autopilot', 'Supercharging', 'Premium Interior', 'Mobile Connector']
    },
    {
      id: 3,
      name: 'Toyota RAV4',
      category: 'suv',
      price: '$28,500',
      year: 2022,
      mileage: '25,000 miles',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      seats: 5,
      rating: 4.7,
      image: Truck,
      condition: 'Good',
      badge: 'Best Value',
      features: ['AWD', 'Safety Sense 2.0', 'Apple CarPlay', 'Backup Camera']
    },
    {
      id: 4,
      name: 'Honda Accord',
      category: 'sedan',
      price: '$24,900',
      year: 2023,
      mileage: '18,000 miles',
      fuel: 'Gasoline',
      transmission: 'CVT',
      seats: 5,
      rating: 4.6,
      image: Car,
      condition: 'Excellent',
      badge: 'Popular Choice',
      features: ['Honda Sensing', 'Wireless Charging', 'Dual Climate', 'LED Headlights']
    },
    {
      id: 5,
      name: 'BMW X5',
      category: 'luxury',
      price: '$52,900',
      year: 2023,
      mileage: '8,000 miles',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      seats: 7,
      rating: 4.9,
      image: Truck,
      condition: 'Excellent',
      badge: 'Premium',
      features: ['xDrive AWD', 'Panoramic Roof', 'Harman Kardon', 'Gesture Control']
    },
    {
      id: 6,
      name: 'Nissan Leaf',
      category: 'electric',
      price: '$19,900',
      year: 2022,
      mileage: '15,000 miles',
      fuel: 'Electric',
      transmission: 'Automatic',
      seats: 5,
      rating: 4.4,
      image: Zap,
      condition: 'Good',
      badge: 'Eco-Friendly',
      features: ['ProPILOT Assist', 'Quick Charge', 'NissanConnect', 'Climate Control']
    },
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || vehicle.category === selectedCategory;
    let matchesPrice = true;
    
    if (priceRange !== 'all') {
      const price = parseInt(vehicle.price.replace(/[$,]/g, ''));
      switch (priceRange) {
        case 'under-25k':
          matchesPrice = price < 25000;
          break;
        case '25k-40k':
          matchesPrice = price >= 25000 && price <= 40000;
          break;
        case 'above-40k':
          matchesPrice = price > 40000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
              Premium Automobiles
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
              Browse Vehicles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of premium vehicles. From luxury sedans to 
              eco-friendly electric cars, find your perfect match with our quality guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Vehicle Type" />
              </SelectTrigger>
              <SelectContent>
                {vehicleTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-25k">Under $25,000</SelectItem>
                <SelectItem value="25k-40k">$25,000 - $40,000</SelectItem>
                <SelectItem value="above-40k">Above $40,000</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl mb-8 text-foreground text-center">Shop by Vehicle Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {vehicleTypes.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-border bg-card ${
                  selectedCategory === type.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedCategory(type.id)}
              >
                <CardContent className="p-6 text-center">
                  <type.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground text-sm">{type.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl text-foreground">
              Available Vehicles ({filteredVehicles.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-card">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                  <vehicle.image className="h-20 w-20 text-gray-600 dark:text-gray-400" />
                  {vehicle.badge && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                      {vehicle.badge}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute bottom-3 left-3 bg-green-500 text-white text-xs">
                    {vehicle.condition}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(vehicle.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({vehicle.rating})</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{vehicle.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{vehicle.price}</div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span>{vehicle.mileage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{vehicle.seats} seats</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {vehicle.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{vehicle.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentPage('contact')}
                      className="px-6"
                    >
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No vehicles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all vehicle types.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12 text-foreground">Our Vehicle Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-card">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Inspection</h3>
                <p className="text-muted-foreground">
                  Every vehicle undergoes comprehensive 150-point inspection before sale.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border bg-card">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Extended Warranty</h3>
                <p className="text-muted-foreground">
                  Comprehensive warranty coverage for peace of mind ownership.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border bg-card">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Support</h3>
                <p className="text-muted-foreground">
                  Dedicated sales team to help you find your perfect vehicle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Drive Your Dream Car?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a test drive today or speak with our automotive specialists about 
            financing options, trade-ins, and extended warranties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setCurrentPage('contact')}
              variant="secondary" 
              className="px-8"
            >
              Schedule Test Drive
            </Button>
            <Button 
              onClick={() => setCurrentPage('contact')}
              variant="outline" 
              className="px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Get Financing Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}