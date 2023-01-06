import Panel from "../components/shared/Panel";
import Button from "../components/shared/Button";
import { ReactComponent as bgCercle } from "../assets/home/desktop/bg-pattern-hero-home.svg";
import imgPhone from "../assets/home/desktop/image-hero-phone.png";
import NavCard from "../components/shared/NavCard";
function Home() {
  return (
    <>
      <div className="mb-40">
        <Panel
          className={
            "desktop:py-[9rem] px-6 py-20 tablet:p-[3.75rem]  h-[53rem] desktop:h-fit desktop:px-[5.94rem] desktop:flex desktop:justify-between desktop:items-start"
          }
          content={
            <>
              <div className="desktop:w-[60%]  text-white desktop:text-left text-center tablet:max-w-[37.5rem] desktop:m-0 mx-auto">
                <h1 className="text-[2rem] font-bold leading-[36px] tablet:text-h1 z-10 ">
                  Award-winning custom designs and digital branding solutions
                </h1>
                <p className="text-body desktop:m-0  desktop:py-10 py-6 desktop:w-[75%] tablet:w-[70%] mx-auto">
                  With over 10 years in the industry, we are experienced in
                  creating fully responsive websites, app design, and engaging
                  brand experiences. Find out more about our services.
                </p>
                <Button isDark>LEARN MORE</Button>
              </div>
              <img
                src={imgPhone}
                alt="A phone"
                className="absolute tablet:top-[35%] top-[57%] desktop:m-0 desktop:left-auto right-0 left-0 mx-auto  desktop:top-0 desktop:-right-16 scale-150 tablet:scale-100"
              />
            </>
          }
          Pattern={bgCercle}
          patternPosition={
            "desktop:top-0 desktop:right-0 tablet:left-auto left-0 top-[10%] tablet:right-[-15%] tablet:top-[14%] hover:translate-x-16 group-hover:translate-y-10 transition duration-[30s]"
          }
        />
      </div>
      <div className="px-6 tablet:px-0">
        <div className="mb-40 desktop:grid grid-cols-2 gap-8">
          <NavCard
            title={"web design"}
            className={`desktop:max-w-[33.81rem] desktop:h-[40rem]  tablet:h-[12.5rem] h-[15.625rem] bg-cover
            desktop:bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-web-design-large.jpg)] desktop:hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-web-design-large.jpg)]
            tablet:bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/tablet/image-web-design.jpg)] tablet:hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/tablet/image-web-design.jpg)]
            bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/mobile/image-web-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/mobile/image-web-design.jpg)]
            
            `}
            link={"/design/web"}
          />
          <div className="desktop:grid grid-rows-2 gap-6 mt-6 desktop:mt-0">
            <NavCard
              title={"app design"}
              className={`w-full desktop:h-full tablet:h-[12.5rem] h-[15.625rem] bg-cover
          desktop:bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-app-design.jpg)] desktop:hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-app-design.jpg)]
          tablet:bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/tablet/image-app-design.jpg)] tablet:hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/tablet/image-app-design.jpg)]
          bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/mobile/image-app-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/mobile/image-app-design.jpg)]

          `}
              link={"/design/app"}
            />
            <NavCard
              title={"graphic design"}
              className={` w-full desktop:h-full  tablet:h-[12.5rem] h-[15.625rem] mt-6 desktop:mt-0 bg-cover
                    desktop:bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-graphic-design.jpg)] desktop:hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-graphic-design.jpg)]
                    tablet:bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/tablet/image-graphic-design.jpg)] tablet:hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/tablet/image-graphic-design.jpg)]
                    bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/mobile/image-graphic-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/mobile/image-graphic-design.jpg)]

          `}
              link={"/design/graphic"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
