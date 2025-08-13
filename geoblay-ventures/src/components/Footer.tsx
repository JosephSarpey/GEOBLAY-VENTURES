import { Button } from './ui/button';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GB</span>
              </div>
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
                <button
                  onClick={() => setCurrentPage('catalog')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  General Merchandise
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('vehicles')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Automotive Sales
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Business Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Fleet Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Contact
                </button>
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