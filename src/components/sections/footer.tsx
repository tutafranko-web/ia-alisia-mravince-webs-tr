import { VILLA, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-villa-navy text-white/70">
      <div className="container-villa py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-serif text-2xl text-white">
              Villa Alissa<span className="text-villa-gold">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              A luxury stone villa nestled in the ancient village of Mravince,
              offering breathtaking Adriatic views just 6 km from Split.
            </p>
            <p className="mt-3 text-xs text-white/40">
              {VILLA.coordinates.lat}°N, {VILLA.coordinates.lng}°E
            </p>
          </div>

          <div>
            <p className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-villa-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Book & Connect
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#reserve"
                  className="text-sm hover:text-villa-gold transition-colors"
                >
                  Reserve Now
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${VILLA.coordinates.lat},${VILLA.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-villa-gold transition-colors"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/40">
              Mravince, 21210 Solin, Croatia
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Villa Alissa. All rights reserved.</p>
          <p>Crafted for authentic Dalmatian hospitality</p>
        </div>
      </div>
    </footer>
  );
}
