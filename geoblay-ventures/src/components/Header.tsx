import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Sun, Moon, Menu } from 'lucide-react';
import logo from '../assets/logo.jpg';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'catalog', path: '/catalog', label: 'Catalog' },
    { id: 'vehicles', path: '/vehicles', label: 'Vehicles' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="GeoBlay Ventures Logo" 
              className="h-10 w-auto object-contain rounded-lg"
            />
            <h3 className="text-foreground">GeoBlay Ventures</h3>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => `transition-colors ${
                    isActive
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </NavLink>
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
                <SheetContent 
                  side="right" 
                  className="w-80"
                  aria-describedby="mobile-navigation-description"
                >
                  <p id="mobile-navigation-description" className="sr-only">
                    Mobile navigation menu for GeoBlay Ventures website
                  </p>
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-3">
                      <img 
                        src={logo} 
                        alt="GeoBlay Ventures Logo" 
                        className="h-8 w-auto object-contain rounded-lg"
                      />
                      <span>GeoBlay Ventures</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) => `block px-4 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
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