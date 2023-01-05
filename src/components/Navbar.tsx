import logodark from "../assets/shared/desktop/logo-dark.png";
import logolight from "../assets/shared/desktop/logo-light.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Humburger } from "../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../assets/shared/mobile/icon-close.svg";
import { useState } from "react";
const NavbarItems = [
  { id: 1, title: "our company", link: "about" },
  { id: 2, title: "Locations", link: "locations" },
  { id: 3, title: "Contact", link: "contact" },
];
function Navbar({ isDark = false }: NavbarProps) {
  const [showBurger, setShowBurger] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <header
        className={`w-full flex justify-between items-center  ${
          isDark
            ? `tablet:pb-10 desktop:border-b flex-col tablet:flex-row border-white border-opacity-10 ${
                pathname === "/contact"
                  ? "pt-16 tablet:pt-20 "
                  : "desktop:pt-36 tablet:pt-40 pt-64"
              } `
            : "py-8  tablet:py-16 px-6 tablet:px-0"
        }`}
      >
        <div
          className={`${
            isDark
              ? "border-b border-white pb-8 w-full tablet:w-fit border-opacity-10 tablet:pb-0 tablet:border-none"
              : ""
          }`}
        >
          <Link to={"/"} className="">
            {isDark ? (
              <img
                src={logolight}
                className="w-[202px] h-[27px] mx-auto tablet:mx-0"
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
        {showBurger ? (
          <CloseIcon
            onClick={() => setShowBurger(false)}
            className={`cursor-pointer tablet:hidden ${
              isDark ? "hidden" : ""
            } `}
          />
        ) : (
          <Humburger
            onClick={() => setShowBurger(true)}
            className={`cursor-pointer tablet:hidden ${
              isDark ? "hidden" : ""
            } `}
          />
        )}
        <ul
          className={`tablet:flex items-center text-center tablet:text-left ${
            isDark ? "block" : `hidden`
          }  `}
        >
          {NavbarItems.map((item) => (
            <li
              key={item.id}
              className={`text-[0.875rem] first-of-type:ml-0 my-8 tablet:my-0 tablet:ml-10 tracking-[2px] leading-[14px] ${
                isDark ? "text-white" : "text-darkGrey"
              } uppercase hover:underline `}
            >
              <Link to={`/${item.link}`}> {item.title}</Link>
            </li>
          ))}
        </ul>
      </header>
      {showBurger && (
        <ul
          className={`tablet:hidden bg-black text-white  transition text-h3 text-[1.5rem] p-4 ${
            isDark ? "hidden" : ``
          }  `}
        >
          {NavbarItems.map((item) => (
            <li key={item.id} className={`my-8 uppercase hover:underline `}>
              <Link to={`/${item.link}`}> {item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Navbar;

type NavbarProps = {
  isDark?: boolean;
};
