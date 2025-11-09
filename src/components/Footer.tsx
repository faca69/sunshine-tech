import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  ST
                </span>
              </div> */}
              <span className="font-bold text-lg text-foreground">
                Sunshine Technologies
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for IT solutions and managed services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">IT Support</li>
              <li className="text-muted-foreground text-sm">Cloud Solutions</li>
              <li className="text-muted-foreground text-sm">Cybersecurity</li>
              <li className="text-muted-foreground text-sm">
                Network Management
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground text-sm">
                <Phone size={16} className="mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Mail size={16} className="mr-2" />
                info@sunshinetech.com
              </li>
              <li className="flex items-start text-muted-foreground text-sm">
                <MapPin size={16} className="mr-2 mt-0.5" />
                123 Tech Plaza, Suite 100
                <br />
                Silicon Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sunshine Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
