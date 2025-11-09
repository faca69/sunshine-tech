import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every solution we deliver, ensuring the highest quality of service.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We build lasting relationships with our clients, becoming a true extension of their team.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "We're committed to helping our clients grow by providing scalable IT infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              About Sunshine Technologies
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-in">
              Your trusted partner in managed IT services since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 2025, Sunshine Technologies emerged from a simple
                vision: to make enterprise-level IT services accessible to
                businesses of all sizes. What started as a small team of
                passionate IT professionals has grown into a trusted managed
                service provider serving hundreds of clients across multiple
                industries.
              </p>
              <p>
                Over the years, we've witnessed the dramatic evolution of
                technology and its impact on business operations. Through every
                change, our commitment has remained constant: providing
                reliable, secure, and innovative IT solutions that empower
                businesses to focus on their core objectives.
              </p>
              <p>
                Today, Sunshine Technologies is proud to be a leading MSP,
                offering services from 24/7 support to advanced cybersecurity
                solutions. Our team of certified professionals brings decades of
                combined experience, ensuring that your technology
                infrastructure is in expert hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                14+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">IT Professionals</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground">
              To empower businesses with reliable, secure, and innovative IT
              solutions that drive growth, enhance productivity, and provide
              peace of mind. We're committed to being more than just a service
              provider – we're your technology partner, dedicated to your
              success.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
