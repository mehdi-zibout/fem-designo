import logodark from "../assets/shared/desktop/logo-dark.png";
import logolight from "../assets/shared/desktop/logo-light.png";

import { Link } from "react-router-dom";

const NavbarItems = [
  { id: 1, title: "our company", link: "about" },
  { id: 2, title: "Locations", link: "locations" },
  { id: 3, title: "Contact", link: "contact" },
];
function Navbar({ isDark = false }: NavbarProps) {
  return (
    <header
      className={`w-full flex justify-between items-center ${
        isDark
          ? "tablet:pt-20 tablet:pb-10 pt-16 border-b border-white border-opacity-10"
          : "py-8  tablet:py-16"
      }`}
    >
      <div className="">
        <Link to={"/"}>
          {isDark ? (
            <img
              src={logolight}
              className="w-[202px] h-[27px]"
              alt="desingo logo"
            />
          ) : (
            <img
              src={logodark}
              className="w-[202px] h-[27px]"
              alt="desingo logo"
            />
          )}
        </Link>
      </div>
      <ul className="flex items-center">
        {NavbarItems.map((item) => (
          <li
            key={item.id}
            className={`text-[0.875rem] first-of-type:ml-0 ml-10 tracking-[2px] leading-[14px] ${
              isDark ? "text-white" : "text-darkGrey"
            } uppercase hover:underline `}
          >
            <Link to={`/${item.link}`}> {item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;

type NavbarProps = {
  isDark?: boolean;
};
