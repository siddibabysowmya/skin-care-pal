import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              About Glow Guide
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted companion for personalized skin-care recommendations. 
              We help you discover products perfectly suited to your unique skin needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Skin Care Tips</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@glowguide.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Beauty Lane, CA 90210</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Glow Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
