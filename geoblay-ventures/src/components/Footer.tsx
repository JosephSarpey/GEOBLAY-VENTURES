import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../assets/logo.jpg';


export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="GeoBlay Ventures Logo" 
                className="h-8 w-auto object-contain rounded-lg"
              />
              <h3 className="text-foreground">GeoBlay Ventures</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for quality general merchandise and premium automobiles.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-foreground transition-colors block"
                >
                  General Merchandise
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicles"
                  className="hover:text-foreground transition-colors block"
                >
                  Automotive Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-foreground transition-colors block"
                >
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground transition-colors block"
                >
                  Fleet Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="hover:text-foreground transition-colors block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about#team"
                  className="hover:text-foreground transition-colors block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-foreground transition-colors block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground transition-colors block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-foreground">Connect</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Stay updated with our latest offerings
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-input-background border border-input rounded text-sm text-foreground focus:border-ring focus:outline-none transition-colors"
              />
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-500"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GeoBlay Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}