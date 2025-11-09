import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Cloud,
  Network,
  HeadphonesIcon,
  Server,
  Lock,
  Database,
  Smartphone,
  Monitor,
  Users,
  Settings,
  Zap,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: "24/7 IT Support",
      description:
        "Round-the-clock help desk and technical support ensuring your team stays productive at all times.",
      features: [
        "Immediate response to critical issues",
        "Remote and on-site support",
        "Ticket management system",
        "Dedicated support team",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Seamless migration and management of cloud infrastructure for scalability and flexibility.",
      features: [
        "Cloud migration strategy",
        "Multi-cloud management",
        "Cost optimization",
        "Data backup and recovery",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Security solutions to protect your business from evolving cyber threats.",
      features: [
        "Threat detection and response",
        "Security audits and assessments",
        "Compliance management",
        "Employee security training",
      ],
    },
    {
      icon: Network,
      title: "Network Management",
      description:
        "Design, implementation, and monitoring of robust network infrastructure.",
      features: [
        "Network design and setup",
        "Performance monitoring",
        "Firewall configuration",
        "VPN and remote access",
      ],
    },
    {
      icon: Server,
      title: "Server Management",
      description:
        "Proactive server monitoring, maintenance, and optimization for peak performance.",
      features: [
        "Server installation and configuration",
        "Performance optimization",
        "Patch management",
        "Disaster recovery planning",
      ],
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Secure data storage, backup solutions, and recovery services to protect critical business information.",
      features: [
        "Automated backup solutions",
        "Data encryption",
        "Recovery testing",
        "Storage optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Device Management",
      description:
        "Secure and manage mobile devices across your organization with MDM solutions.",
      features: [
        "Device enrollment and provisioning",
        "Security policy enforcement",
        "App management",
        "Remote wipe capabilities",
      ],
    },
    {
      icon: Monitor,
      title: "IT Consulting",
      description:
        "Strategic technology planning and consultation to align IT with your business goals.",
      features: [
        "Technology roadmap planning",
        "Vendor management",
        "IT budget optimization",
        "Digital transformation strategy",
      ],
    },
    {
      icon: Users,
      title: "User Training",
      description:
        "Training programs to maximize productivity and security awareness.",
      features: [
        "Software training sessions",
        "Security awareness training",
        "Custom training programs",
        "Documentation and resources",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/src/assets/networking-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-in">
              Managed IT services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                    <service.icon
                      className="text-primary-foreground"
                      size={28}
                    />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-foreground"
                      >
                        <Zap
                          className="text-accent mr-2 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business is unique. Let's discuss how we can create a
              tailored IT strategy that fits your specific needs and budget.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us Today</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
