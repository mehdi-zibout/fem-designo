import Panel from "../components/shared/Panel";
import Button from "../components/shared/Button";
import { ReactComponent as bgCercle } from "../assets/home/desktop/bg-pattern-hero-home.svg";
import imgPhone from "../assets/home/desktop/image-hero-phone.png";
function Home() {
  return (
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
  );
}

export default Home;
