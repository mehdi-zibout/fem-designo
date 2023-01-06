import Panel from "../components/shared/Panel";
import { ReactComponent as bgCercle } from "../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import { ReactComponent as bgCercleMobile } from "../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import imgHeroDesktop from "../assets/about/desktop/image-about-hero.jpg";
import imgHeroTablet from "../assets/about/tablet/image-about-hero.jpg";
import imgHeroMobile from "../assets/about/mobile/image-about-hero.jpg";
import imgWCTMobile from "../assets/about/mobile/image-world-class-talent.jpg";
import imgWCTDesktop from "../assets/about/Desktop/image-world-class-talent.jpg";
import imgWCTTablet from "../assets/about/Tablet/image-world-class-talent.jpg";

function About() {
  return (
    <>
      <div className="desktop:mb-40 tablet:mb-32">
        <Panel
          className={""}
          content={
            <div className="flex  flex-col-reverse desktop:flex-row desktop:items-center desktop:justify-start ">
              <div className="h-[56%] desktop:h-full w-full desktop:w-[56%]">
                <div className="py-20 px-6 tablet:px-16 desktop:px-[5.93rem] ">
                  <h1 className="text-[2rem] font-medium leading-9 text-center pb-6 tablet:text-h1 desktop:text-left">
                    About Us
                  </h1>
                  <p className="text-body tablet:text-center desktop:text-left">
                    Founded in 2010, we are a creative agency that produces
                    lasting results for our clients. We’ve partnered with many
                    startups, corporations, and nonprofits alike to craft
                    designs that make real impact. We’re always looking forward
                    to creating brands, products, and digital experiences that
                    connect with our clients’ audiences.
                  </p>
                </div>
              </div>
              {/* <div className="z-10"> */}
              <img
                src={
                  window.innerWidth < 712
                    ? imgHeroMobile
                    : window.innerWidth < 1260
                    ? imgHeroTablet
                    : imgHeroDesktop
                }
                alt="Our team working"
                className="w-full h-[44%] desktop:h-full  desktop:w-[44%] block z-10"
              />
              {/* </div> */}
            </div>
          }
          Pattern={window.innerWidth >= 712 ? bgCercle : bgCercleMobile}
          patternPosition={
            "absolute bottom-[-48%] left-[-54%] tablet:bottom-[18%] tablet:left-[-16%] desktop:bottom-[-2%] desktop:left-[3%]"
          }
        />
      </div>
      <div className="desktop:mb-40 mb-32">
        <Panel
          className={"bg-[#FDF3F0]"}
          content={
            <div className="flex  flex-col-reverse desktop:flex-row-reverse desktop:items-center desktop:justify-start ">
              <div className="h-[56%] desktop:h-full w-full desktop:w-[56%]">
                <div className="py-20 px-6 tablet:px-16 desktop:px-[5.93rem] ">
                  <h2 className="text-[2rem] font-medium leading-9 text-center pb-6 tablet:text-h1 desktop:text-left text-peach">
                    World-class talent
                  </h2>
                  <p className="text-body tablet:text-center desktop:text-left text-darkGrey">
                    We are a crew of strategists, problem-solvers, and
                    technologists. Every design is thoughtfully crafted from
                    concept to launch, ensuring success in its given market. We
                    are constantly updating our skills in a myriad of platforms.
                    Our team is multi-disciplinary and we are not merely
                    interested in form — content and meaning are just as
                    important. We give great importance to craftsmanship,
                    service, and prompt delivery. Clients have always been
                    impressed with our high-quality outcomes that encapsulates
                    their brand’s story and mission
                  </p>
                </div>
              </div>
              {/* <div className="z-10"> */}
              <img
                src={
                  window.innerWidth < 712
                    ? imgWCTMobile
                    : window.innerWidth < 1260
                    ? imgWCTTablet
                    : imgWCTDesktop
                }
                alt="Our team working"
                className="w-full h-[44%] desktop:h-full  desktop:w-[44%] block z-10 "
              />
              {/* </div> */}
            </div>
          }
          Pattern={bgCercleMobile}
          patternPosition={
            "absolute bottom-[-49%] left-[-78%] tablet:bottom-[-90%] tablet:left-[-36%]  opacity-20 desktop:bottom-[-99%] desktop:left-[10%]"
          }
        />
      </div>
    </>
  );
}

export default About;
