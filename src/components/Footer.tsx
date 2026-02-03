import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Collections", href: "#" },
    { name: "Rings", href: "#" },
    { name: "Necklaces", href: "#" },
    { name: "Earrings", href: "#" },
    { name: "Bracelets", href: "#" },
  ],
  about: [
    { name: "Our Story", href: "#" },
    { name: "Craftsmanship", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
  ],
  help: [
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Size Guide", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="font-serif text-2xl font-semibold tracking-wide">
              AURUM
            </a>
            <p className="text-background/70 text-sm max-w-sm leading-relaxed">
              Crafting timeless elegance since 2010. Each piece is a testament to our commitment to quality, artistry, and sustainable luxury.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-background hover:border-background/50 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-medium tracking-wide mb-6 text-sm uppercase">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-medium tracking-wide mb-6 text-sm uppercase">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-medium tracking-wide mb-6 text-sm uppercase">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © 2026 Brain<span style={{ color: '#fac72d' }}>t</span>isa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-background/50 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
