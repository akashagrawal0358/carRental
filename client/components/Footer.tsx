import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-6 text-black-100 border-t border-gray-100">
      <div className="flex max-md:flex-col justify-between flex-wrap gap-4 sm:px-15 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-5">
          <Image
            src="logo.svg"
            width={118}
            height={18}
            alt="Car-logo"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarRental
            <br />
            All rights reserved &copy; 2024
          </p>
        </div>

        {/* 1st map used to iterate over footerlinks and 2nd map used for iterate links of each footerlink */}
        <div className="footer__links">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="footer__link">
              <h3 className="font-bold">{footerlink.title}</h3>
              {footerlink.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-grey-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarRental. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
