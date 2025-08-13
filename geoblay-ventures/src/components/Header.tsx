import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Sun, Moon, Menu } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ isDarkMode, toggleDarkMode, currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false); // Close mobile menu when navigation item is clicked
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">GB</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                GeoBlay Ventures
              </h1>
            </div>
          </button>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors ${
                    currentPage === item.id
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="h-10 w-10 rounded-lg"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-lg"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-5 w-5 text-foreground" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">GB</span>
                      </div>
                      <span>GeoBlay Ventures</span>
                    </SheetTitle>
                    <SheetDescription>
                      Navigate through our website and explore our services, products, and company information.
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-8">
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`text-left py-3 px-4 rounded-lg transition-colors ${
                            currentPage === item.id
                              ? 'bg-primary text-primary-foreground font-medium'
                              : 'text-foreground hover:bg-muted hover:text-primary'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>

                    {/* Mobile Theme Toggle */}
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground font-medium">Theme</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={toggleDarkMode}
                          className="flex items-center gap-2"
                          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                          {isDarkMode ? (
                            <>
                              <Sun className="h-4 w-4" />
                              Light
                            </>
                          ) : (
                            <>
                              <Moon className="h-4 w-4" />
                              Dark
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Mobile Contact Info */}
                    <div className="mt-8 pt-8 border-t border-border">
                      <h3 className="text-foreground font-medium mb-4">Contact Us</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>📞 +1 (555) 123-4567</p>
                        <p>✉️ info@geoblayventures.com</p>
                        <p>📍 123 Business District</p>
                      </div>
                    </div>

                    {/* Call-to-Action in Mobile Menu */}
                    <div className="mt-8">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                        onClick={() => handleNavClick('contact')}
                      >
                        Get In Touch
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}