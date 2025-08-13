import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users,
  Car,
  Package,
} from 'lucide-react';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

export function ContactPage({ setCurrentPage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri 9AM-6PM',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@geoblouventures.com',
      secondary: 'sales@geoblouventures.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      primary: '123 Business District',
      secondary: 'City, State 12345',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Mon-Fri: 9AM-6PM',
      secondary: 'Sat: 9AM-4PM',
      color: 'from-green-500 to-green-600'
    }
  ];

  const departments = [
    {
      icon: Package,
      title: 'General Merchandise',
      description: 'Product inquiries, bulk orders, and catalog requests',
      phone: '+1 (555) 123-4567 ext. 101',
      email: 'merchandise@geoblouventures.com'
    },
    {
      icon: Car,
      title: 'Automotive Sales',
      description: 'Vehicle inquiries, test drives, and financing',
      phone: '+1 (555) 123-4567 ext. 102',
      email: 'automotive@geoblouventures.com'
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'General questions, account support, and feedback',
      phone: '+1 (555) 123-4567 ext. 103',
      email: 'support@geoblouventures.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your needs? Our team is here to help you find the perfect solutions. 
              Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardContent className="p-6">
                  <div className={`h-16 w-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{info.title}</h3>
                  <p className="font-medium text-foreground">{info.primary}</p>
                  <p className="text-sm text-muted-foreground">{info.secondary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone Number
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Service Interest
                      </label>
                      <Select value={formData.service} onValueChange={(value: string) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general-merchandise">General Merchandise</SelectItem>
                          <SelectItem value="automotive-sales">Automotive Sales</SelectItem>
                          <SelectItem value="business-solutions">Business Solutions</SelectItem>
                          <SelectItem value="bulk-orders">Bulk Orders</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Subject *
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your requirements..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Department Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Contact by Department
                </h2>
                <p className="text-muted-foreground mb-8">
                  Get in touch with the right team for your specific needs.
                </p>
              </div>

              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <dept.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">{dept.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{dept.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-foreground">{dept.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-primary" />
                            <span className="text-foreground">{dept.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setCurrentPage('vehicles')}
                    >
                      <Calendar className="h-4 w-4 mr-3" />
                      Schedule a Test Drive
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setCurrentPage('catalog')}
                    >
                      <Package className="h-4 w-4 mr-3" />
                      Request Product Catalog
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      <Users className="h-4 w-4 mr-3" />
                      Speak with Sales Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-foreground">What are your business hours?</h3>
                <p className="text-muted-foreground text-sm">
                  We're open Monday-Friday 9AM-6PM and Saturday 9AM-4PM. Our online services are available 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-foreground">Do you offer bulk discounts?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We offer competitive pricing for bulk orders. Contact our sales team for a custom quote.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-foreground">What financing options are available?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer various financing options for vehicles and business equipment. Speak with our finance team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-foreground">Do you provide delivery services?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide delivery services across the region. Delivery fees and timelines vary by location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Visit Our Location
            </h2>
            <p className="text-muted-foreground">
              Come see our showroom and warehouse facility in person.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
              <p className="text-muted-foreground">123 Business District, City, State 12345</p>
              <Button className="mt-4" variant="outline">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}