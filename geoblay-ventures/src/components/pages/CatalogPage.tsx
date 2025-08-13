/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  Package,
  Search,
  Filter,
  Star,
  ShoppingCart,
  Laptop,
  Home,
  Briefcase,
  Wrench,
  Smartphone,
  Monitor,
} from 'lucide-react';

interface CatalogPageProps {
  setCurrentPage: (page: string) => void;
}

export function CatalogPage({ setCurrentPage }: CatalogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Package },
    { id: 'electronics', name: 'Electronics', icon: Laptop },
    { id: 'home-garden', name: 'Home & Garden', icon: Home },
    { id: 'office', name: 'Office Supplies', icon: Briefcase },
    { id: 'industrial', name: 'Industrial Equipment', icon: Wrench },
  ];

  const products = [
    {
      id: 1,
      name: 'Professional Laptop',
      category: 'electronics',
      price: '$899',
      rating: 4.8,
      image: Laptop,
      description: 'High-performance laptop for business professionals',
      inStock: true,
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'Smartphone Pro',
      category: 'electronics',
      price: '$699',
      rating: 4.9,
      image: Smartphone,
      description: 'Latest smartphone with advanced features',
      inStock: true,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Gaming Monitor 27"',
      category: 'electronics',
      price: '$329',
      rating: 4.7,
      image: Monitor,
      description: '4K gaming monitor with HDR support',
      inStock: false,
      badge: ''
    },
    {
      id: 4,
      name: 'Garden Tool Set',
      category: 'home-garden',
      price: '$89',
      rating: 4.5,
      image: Home,
      description: 'Complete gardening tool set for home use',
      inStock: true,
      badge: 'Best Seller'
    },
    {
      id: 5,
      name: 'Office Desk Chair',
      category: 'office',
      price: '$199',
      rating: 4.6,
      image: Briefcase,
      description: 'Ergonomic office chair for comfort',
      inStock: true,
      badge: ''
    },
    {
      id: 6,
      name: 'Industrial Drill Set',
      category: 'industrial',
      price: '$349',
      rating: 4.8,
      image: Wrench,
      description: 'Professional-grade drill set for industrial use',
      inStock: true,
      badge: 'Professional'
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white">
              General Merchandise
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Product Catalog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our extensive range of quality products across multiple categories. 
              From electronics to industrial equipment, we have everything you need.
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price">Price Low-High</SelectItem>
                <SelectItem value="rating">Rating High-Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl mb-8 text-foreground text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-border bg-card ${
                  selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <category.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl text-foreground">
              Products ({sortedProducts.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                  <product.image className="h-16 w-16 text-gray-600 dark:text-gray-400" />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                      {product.badge}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute top-3 right-3 bg-gray-500 text-white text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.rating})</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button 
                      size="sm" 
                      disabled={!product.inStock}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Something Specific?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team can help source custom products 
            or provide bulk ordering options for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setCurrentPage('contact')}
              variant="secondary" 
              className="px-8"
            >
              Request Custom Quote
            </Button>
            <Button 
              onClick={() => setCurrentPage('contact')}
              variant="outline" 
              className="px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}