import Image from "next/image";
import Link from "next/link";
import FBIcon from "public/images/icon-facebook.svg";
import TwitterIcon from "public/images/icon-twitter.svg";
import PinterestIcon from "public/images/icon-pinterest.svg";
import InstagramIcon from "public/images/icon-instagram.svg";

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
  {
    name: "FB",
    icon: FBIcon,
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
  },
  {
    name: "Pinteres",
    icon: PinterestIcon,
  },
   {
    name: "Instagram",
    icon: InstagramIcon,
  },
]

export default function Footer() {
  console.log(FBIcon);
  return (
    <footer className="w-full bg-very_dark_violet flex justify-center ">
      <div className="flex flex-col md:flex-row md:justify-center md:w-[88%] items-center gap-6 md:gap-20 md:items-start md:py-24">
        <h3 className="text-white text-3xl font-[500] tracking-wide py-12 md:py-0 md:mr-auto">
          Shortly
        </h3>
        {/* <div className="flex flex-col md:flex-row md:justify-between md:items-start md: gap-20"> */}
        {footerLinks.map((link, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-3 mb-8 md:mb-0 justify-center md:items-start items-center"
            >
              <h5 className="capitalize text-white font-medium text-sm mb-2">
                {link.category}
              </h5>
              {link.links.map((item) => {
                return (
                  <Link
                    className="capitalize text-silver hover:text-robin_egg_blue text-sm font-[300]"
                    key={item}
                    href="#"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          );
        })}
        {/* </div> */}

        <div className="flex justify-center gap-5 mb-12 md:items-start">
          {icons.map((icon) => {
            return (
              <Link href={"#"} key={icon.name}>
                <icon.icon className='fill-white hover:fill-robin_egg_blue' />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
