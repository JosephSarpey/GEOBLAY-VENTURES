import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Car,
  Package,
  Users,
  Award,
  ArrowRight,
  Star,
  Check
} from 'lucide-react';
import heroImage from '../../assets/hero_image.webp';
import teamImage from '../../assets/team.webp';
import { ProductCarousel } from '../ProductCarousel';
import premiumVehicle from '../../assets/ford150.jpg';
import buildingMaterial from '../../assets/building_materials.jpg';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const services = [
    {
      icon: Package,
      title: "General Merchandise",
      description: "Wide range of quality products for businesses and individuals",
      features: ["Building Materials", "Home & Garden", "Electronics", "Industrial Equipment"],
    },
    {
      icon: Car,
      title: "Automotive Sales",
      description: "Premium vehicles and comprehensive automotive solutions",
      features: ["New & Used Cars", "Fleet Sales", "Financing Options", "After-sales Support"],
    },
    {
      icon: Users,
      title: "Business Solutions",
      description: "Tailored procurement and supply chain services",
      features: ["Bulk Orders", "Custom Sourcing", "Logistics Support", "Competitive Pricing"],
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Products Delivered" },
    { number: "50+", label: "Vehicles Sold" },
    { number: "5+", label: "Years Experience" },
  ];

  const products = [
    {
      id: 1,
      title: 'Luxury Sedan',
      description: 'Experience ultimate comfort and style with our premium sedan.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Premium SUV',
      description: 'Power and space for all your adventures on and off the road.',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Sports Car',
      description: 'Unmatched performance and head-turning design.',
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Electric Vehicle',
      description: 'Eco-friendly driving without compromising on performance.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                Trusted Business Partner
              </Badge>
              <h1 className="text-4xl font-bold lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                Your Gateway to Quality Goods & Premium Automobiles
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                GeoBlay Ventures specializes in supplying general merchandise and premium automobiles.
                We deliver quality products and exceptional service to businesses and individuals across the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setCurrentPage('about')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3"
                  onClick={() => setCurrentPage('contact')}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full h-[400px] overflow-hidden border border-border relative">
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-orange-500" />
                  <div>
                    <p className="font-semibold text-foreground">Premium Quality</p>
                    <p className="text-sm text-muted-foreground">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <ProductCarousel items={products} />

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl shadow-lg w-full h-[400px] bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-800/30 dark:via-blue-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-blue-500/10 to-purple-500/10"></div>
                <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
                About GeoBlay Ventures
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Building Trust Through Quality & Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At GeoBlay Ventures, we pride ourselves on being a reliable partner for businesses and
                individuals seeking quality general merchandise and premium automobiles. Our commitment to
                excellence has made us a trusted name in the supply and retail industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-foreground">
                    Extensive product portfolio across multiple categories
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-foreground">
                    Premium automotive selection with competitive pricing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-foreground">
                    Dedicated customer service and after-sales support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 text-purple-700 dark:text-purple-300">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Comprehensive Solutions for Your Needs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From general merchandise to premium automobiles, we provide comprehensive solutions
              tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-orange-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/30 dark:to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Quality Products & Premium Vehicles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-border bg-card shadow-lg">
              <div className="relative h-64">
                <div className="w-full h-full bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-green-900/30 dark:via-blue-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20"></div>
                  <div className="relative z-10 text-center">
                  <img src={buildingMaterial} alt="Premium Vehicle" className='w-full h-full object-cover'/>
                    <h3 className="text-lg font-semibold text-foreground">
                      Warehouse Goods
                    </h3>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                  In Stock
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2 text-foreground">
                  General Merchandise
                </h3>
                <p className="text-muted-foreground mb-4">
                  Wide selection of quality products including building materials, electronics, home goods, and office supplies.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setCurrentPage('catalog')}
                >
                  View Catalog
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border bg-card shadow-lg">
              <div className="relative h-64">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 via-red-100 to-purple-100 dark:from-orange-900/30 dark:via-red-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-purple-500/20"></div>
                  <div className="relative z-10 text-center">
                    <img src={premiumVehicle} alt="Premium Vehicle" className='w-full h-full object-cover'/>
                    <h3 className="text-lg font-semibold text-foreground">
                      Auto Industry
                    </h3>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                  Premium
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2 text-foreground">
                  Premium Automobiles
                </h3>
                <p className="text-muted-foreground mb-4">
                  Carefully selected new and used vehicles with comprehensive warranty and support.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setCurrentPage('vehicles')}
                >
                  Browse Vehicles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}