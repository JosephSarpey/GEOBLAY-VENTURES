import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Car,
  Package,
  Users,
  ArrowRight,
  Star,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import teamImage from '../../assets/team.webp';
import { ProductCarousel } from '../ProductCarousel';
import premiumVehicle from '../../assets/ford150.jpg';
import buildingMaterial from '../../assets/building_materials.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { FAQ } from '../FAQ';
import { Testimonials } from '../Testimonials';
import { NewsletterSubscription } from '../NewsletterSubscription';

const heroSlides = [
    {
      title: "Premium Automobiles",
      subtitle: "Discover our exclusive collection of luxury vehicles",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      buttonText: "View Cars"
    },
    {
      title: "Quality General Merchandise",
      subtitle: "Source the best materials for your construction needs",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      buttonText: "Explore Our Merchandise"
    },
  {
    title: "Business Solutions",
    subtitle: "Comprehensive procurement services for businesses",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    buttonText: "Learn More"
  }
];

export function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {heroSlides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <div 
                  className="h-[80vh] w-full bg-cover bg-center flex items-center"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` }}
                >
                  <div className="container mx-auto px-4 text-white">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl font-bold lg:text-6xl mb-4">{slide.title}</h1>
                      <p className="text-xl mb-8">{slide.subtitle}</p>
                      <Link
                        to={slide.buttonText === "View Cars" ? "/vehicles" : "/catalog"}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
                      >
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-white w-8' : 'bg-white/50 w-3'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
                <img src={teamImage} alt="GeoBlay Ventures Team" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-100">
                About GeoBlay Ventures
              </Badge>
              <h2 className="text-3xl font-bold lg:text-4xl mb-6 text-foreground">
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
            <Badge className="mb-4 bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-100">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold lg:text-4xl mb-6 text-foreground">
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
            <Badge className="mb-4 bg-blue-400 text-white border-0 hover:bg-blue-600 rounded-md px-3 py-1">
              Featured Products
            </Badge>
            <h2 className="text-3xl font-bold lg:text-4xl mb-6 text-foreground">
              Quality Products & Premium Vehicles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-border bg-card shadow-lg">
              <div className="relative h-64">
                <div className="w-full h-full bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-green-900/30 dark:via-blue-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 px-4">
                    <h3 className="text-lg font-semibold">
                      Warehouse Goods
                    </h3>
                  </div>
                  <img src={buildingMaterial} alt="Warehouse Building Materials" loading="lazy" className='w-full h-full object-cover' />
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
                <Link
                  to="catalog"
                  className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  View Catalog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border bg-card shadow-lg">
              <div className="relative h-64">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 via-red-100 to-purple-100 dark:from-orange-900/30 dark:via-red-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-purple-500/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 px-4">
                    <h3 className="text-lg font-semibold">
                      Auto Industry
                    </h3>
                  </div>
                  <img src={premiumVehicle} alt="Premium Ford F-150 Vehicle" loading="lazy" className='w-full h-full object-cover' />
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
                <Link
                  to="vehicles"
                  className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Browse Vehicles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <NewsletterSubscription />

      <Testimonials />
      <FAQ />
    </div>
  );
}