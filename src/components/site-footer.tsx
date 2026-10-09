import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { contactDetails, navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <BrandMark />
            <p>Experience Beyond Digital.</p>
          </div>
          <div className="site-footer__contact">
            <span className="eyebrow">Start a conversation</span>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
          </div>
          <nav aria-label="Footer navigation" className="site-footer__nav">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} UltraX Solutions</span>
          <span>Strategy · Technology · Design</span>
          <span className="site-footer__social">Social · @{contactDetails.socialHandle}</span>
        </div>
      </div>
    </footer>
  );
}
