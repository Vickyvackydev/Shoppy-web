import { footerlinks } from "@/constants";
import Logo from "@/shared/components/logo";
import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const footerMediaIcons = [
  { id: 1, icons: <FiInstagram /> },
  { id: 2, icons: <FiFacebook /> },
  { id: 3, icons: <FiTwitter /> },
  { id: 4, icons: <FiLinkedin /> },
];
const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: Array<string>;
}) => (
  <div className="flex flex-col gap-7 items-start">
    <span className="text-gray-100 font-semibold lg:text-[16px] text-sm">
      {title}
    </span>
    <ul className="flex flex-col gap-5">
      {links.map((link, i) => (
        <li
          key={i}
          className={`${
            i || i === 0 ? "hover:text-gray-100" : ""
          } text-gray-400 font-medium cursor-pointer lg:text-[16px] text-sm`}
        >
          {link}
        </li>
      ))}
    </ul>
  </div>
);
function Footer() {
  return (
    <footer className="w-full py-3 my-4 lg:px-10 px-5 flex justify-between items-start lg:flex-row flex-col gap-8">
      <div className="flex items-start flex-col gap-5">
        <Logo />
        <span className="text-gray-400 lg:text-[16px] text-sm w-full">
          We hos your empire business today <br /> using the latest technologies
        </span>
        <div className="flex items-center gap-3">
          {/* <div className="flex items-center justify-center text-white w-9 h-9 rounded-full bg-gray-700">
            <span>
              <FiInstagram />
            </span>
          </div>
          <div className="flex items-center justify-center text-white w-9 h-9 rounded-full bg-gray-700">
            <span>
              <FiFacebook />
            </span>
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-orange-500 text-white">
            <span>
              <FiTwitter />
            </span>
          </div> */}
          {footerMediaIcons.map((icon) => (
            <div
              key={icon.id}
              className="flex items-center justify-center text-white w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-500 cursor-pointer transition transform hover:-translate-y-1 duration-300"
            >
              <span>{icon.icons}</span>
            </div>
          ))}
        </div>
      </div>
      <FooterColumn title={footerlinks[0].title} links={footerlinks[0].links} />
      <FooterColumn title={footerlinks[1].title} links={footerlinks[1].links} />
      <FooterColumn title={footerlinks[2].title} links={footerlinks[2].links} />
    </footer>
  );
}

export default Footer;
