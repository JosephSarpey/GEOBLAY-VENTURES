import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  //CardDescription,
  //CardHeader,
  //CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Users,
  Award,
  Target,
  Heart,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Truck,
  Clock,
} from "lucide-react";

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

export function AboutPage({ setCurrentPage }: AboutPageProps) {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from product selection to customer service.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Honest, transparent business practices that build lasting relationships with our clients.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go above and beyond to meet your needs.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Continuously evolving to provide modern solutions and stay ahead of market trends.",
    },
  ];

  const achievements = [
    {
      number: "500+",
      label: "Satisfied Customers",
      icon: Users,
    },
    { number: "5+", label: "Years in Business", icon: Clock },
    {
      number: "1000+",
      label: "Products Delivered",
      icon: Truck,
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      icon: Star,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      description:
        "15+ years experience in supply chain and automotive industry",
      image: Users,
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      description:
        "Expert in logistics and inventory management systems",
      image: Users,
    },
    {
      name: "Emily Rodriguez",
      role: "Automotive Sales Director",
      description:
        "Certified automotive specialist with luxury car expertise",
      image: Users,
    },
    {
      name: "David Thompson",
      role: "Customer Relations Manager",
      description:
        "Dedicated to ensuring exceptional customer experiences",
      image: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Building Trust Through Excellence
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since our founding, GeoBlay Ventures has been
              dedicated to providing quality general merchandise
              and premium automobiles. We combine industry
              expertise with personalized service to deliver
              exceptional value to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="rounded-2xl shadow-lg w-full h-[400px] bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-green-900/30 flex items-center justify-center relative overflow-hidden border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-green-500/20"></div>
                <div className="relative z-10 text-center">
                  <Target className="h-20 w-20 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground px-8">
                    Empowering businesses and individuals
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-3">
                    <Target className="h-6 w-6 text-purple-600" />
                    Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the trusted partner that empowers
                    businesses and individuals by providing
                    access to quality general merchandise and
                    premium automobiles, backed by exceptional
                    service and competitive pricing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-3">
                    <Award className="h-6 w-6 text-blue-600" />
                    Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading regional supplier of
                    general merchandise and automobiles, known
                    for our integrity, innovation, and
                    unwavering commitment to customer
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision
              we make and every interaction we have with our
              customers, partners, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Our Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
              and the trust our customers place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center border-border bg-card"
              >
                <CardContent className="p-8">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are passionate about
              delivering exceptional service and building
              lasting relationships with our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <CardContent className="p-6">
                  <div className="h-24 w-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.image className="h-12 w-12 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Why Choose GeoBlay Ventures?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand that choosing the right supplier
                is crucial for your business success. Here's why
                businesses and individuals trust us with their
                procurement needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Quality Assurance
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Rigorous quality control processes ensure
                      every product meets our high standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Competitive Pricing
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Direct partnerships with manufacturers
                      allow us to offer competitive prices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Reliable Delivery
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Efficient logistics network ensures timely
                      delivery across the region.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Expert Support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Dedicated customer service team provides
                      ongoing support and consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg w-full h-[500px] bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-green-900/30 flex items-center justify-center relative overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-green-500/20"></div>
              <div className="relative z-10 text-center">
                <Award className="h-24 w-24 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Excellence in Service
                </h3>
                <p className="text-muted-foreground px-8">
                  Committed to exceeding expectations in every
                  interaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner With Us Today
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that comes from working
            with a trusted supplier. Let us help you find the
            perfect solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setCurrentPage("contact")}
              variant="secondary"
              className="px-8"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => setCurrentPage("catalog")}
              variant="outline"
              className="px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}