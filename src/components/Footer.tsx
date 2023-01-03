import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "./shared/Button";
import Panel from "./shared/Panel";
import { ReactComponent as CallToActionPattern } from "../assets/shared/desktop/bg-pattern-call-to-action.svg";
import { ReactComponent as IconFacebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Iconyoutube } from "../assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as Icontwitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Iconpinterest } from "../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as Iconinstagram } from "../assets/shared/desktop/icon-instagram.svg";

function Footer() {
  const { pathname } = useLocation();
  return (
    <div className="relative">
      {pathname !== "/contact" && (
        <div className="tablet:h-[266px] desktop:h-[215px] h-[270px]">
          <div className="absolute left-0 right-0 mx-auto tablet:px-10 desktop:px-[10.31rem]  desktop:top-[5%] tablet:-top-[3%] top-[1%] px-6">
            <Panel
              className="flex desktop:justify-between desktop:px-24 items-center desktop:flex-row flex-col justify-center text-center desktop:text-left desktop:py-0 py-16 px-6 "
              content={
                <>
                  <div className="">
                    <h1 className="text-h1 text-[2.5rem] desktop:mb-6 capitalize">
                      Let’s talk about <br /> your project
                    </h1>
                    <p className="text-body pt-1 desktop:pt-0 pb-8 desktop:pb-0">
                      Ready to take it to the next level? Contact us today and
                      find out <br />
                      how our expertise can help your business grow.
                    </p>
                  </div>
                  <Button className="uppercase z-10 " isDark>
                    Get In Touch
                  </Button>
                </>
              }
              Pattern={CallToActionPattern}
              patternPosition="-bottom-[65%] right-[0%]"
            />
          </div>
        </div>
      )}
      <footer className="pb-20 px-6 tablet:px-10 desktop:px-[10.31rem] bg-black w-screen">
        <Navbar isDark />
        <div className="flex tablet:justify-between tablet:items-end tablet:flex-row flex-col items-center justify-center mt-8  ">
          <div className="tablet:flex text-center tablet:text-left">
            <ul className="text-opacity-50 text-white text-body desktop:mr-52 tablet:mr-14 mb-10 tablet:mb-0">
              <li className="font-bold">Designo Central Office</li>
              <li className="">3886 Wellington Street</li>
              <li className="">Toronto, Ontario M9C 3J5</li>
            </ul>
            <ul className="text-opacity-50 font-bold text-white text-body mb-10 tablet:mb-0">
              <li className="">Contact Us (Central Office)</li>
              <li className="">P : +1 253-863-8967</li>
              <li className="">M : contact@designo.co</li>
            </ul>
          </div>
          <div className="flex justify-end items-end">
            <a href="#">
              <IconFacebook className="mx-2 cursor-pointer hover:fill-lightPeach fill-peach" />
            </a>
            <a href="#">
              <Iconyoutube className="mx-2 cursor-pointer hover:fill-lightPeach fill-peach" />{" "}
            </a>
            <a href="#">
              <Icontwitter className="mx-2 cursor-pointer hover:fill-lightPeach fill-peach" />
            </a>
            <a href="#">
              <Iconpinterest className="mx-2 cursor-pointer hover:fill-lightPeach fill-peach" />
            </a>
            <a href="#">
              <Iconinstagram className="mx-2 cursor-pointer hover:fill-lightPeach fill-peach" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
