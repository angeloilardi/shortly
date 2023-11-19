import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    category: "features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    category: "resources",
    links: ["blog", "developers", "support"],
  },
  {
    category: "company",
    links: ["about", "our teams", "careers", "contact"],
  },
];

const icons = [
  "/images/icon-facebook.svg",
  "/images/icon-twitter.svg",
  "/images/icon-pinterest.svg",
  "/images/icon-instagram.svg",
];

export default function Footer() {
  return (
    <footer className="w-full bg-very_dark_violet">
      <h3 className="text-white text-center text-3xl font-[500] tracking-wide py-12">Shortly</h3>
        {footerLinks.map((link, i) => {
          return (
            <div key={i} className="flex flex-col gap-3 mb-8 justify-center items-center">
                  <h5 className="capitalize text-white font-medium text-sm mb-2">{link.category}</h5>
                  {
                      link.links.map(item => {
                      return (
                          <Link className="capitalize text-silver text-sm font-[300]" key={i} href='#'>{item}</Link>
                      )
                      }
        )}
            </div>
          );
        })}
      
      <div className="flex justify-center gap-5 mb-12">
        {
          icons.map((icon, i) => {
            return <Image src={icon} width={24} height={24} alt="" key={i}/>
          }

          )
        }
      </div>
    </footer>
  );
}
