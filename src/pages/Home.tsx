import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Cloud, Network, HeadphonesIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import supportImage from "@/assets/service-support.jpg";
import cloudImage from "@/assets/service-cloud.jpg";
import securityImage from "@/assets/service-security.jpg";
import networkImage from "@/assets/service-network.jpg";

const Home = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: "24/7 IT Support",
      description: "Round-the-clock technical support to keep your business running smoothly.",
      image: supportImage,
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure tailored to your business needs.",
      image: cloudImage,
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your data and systems.",
      image: securityImage,
    },
    {
      icon: Network,
      title: "Network Management",
      description: "Reliable network infrastructure and management services.",
      image: networkImage,
    },
  ];

  const benefits = [
    "Proactive monitoring and maintenance",
    "Cost-effective IT solutions",
    "Expert technical team",
    "Scalable services for growth",
    "Enhanced security and compliance",
    "Reduced downtime and improved productivity",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Your Trusted IT Partner for{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Business Success
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive managed IT services designed to optimize your technology infrastructure,
                enhance security, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={heroImage}
                alt="Technology infrastructure"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive IT Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From support to security, we provide end-to-end managed IT solutions
            </p>
          </div>
          <div className="space-y-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[300px] md:h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                        <service.icon className="text-primary-foreground" size={32} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Sunshine Technologies?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We deliver reliable, secure, and scalable IT solutions that empower your business
                to focus on what matters most - growth and innovation.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-primary mt-0.5 mr-3 flex-shrink-0" size={20} />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can support your IT infrastructure and help your business thrive.
              </p>
              <Link to="/contact">
                <Button size="lg" className="w-full">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
