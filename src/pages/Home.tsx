import Panel from "../components/shared/Panel";
import { ReactComponent as BgPattern } from "../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";
import { ReactComponent as CallToActionPattern } from "../assets/shared/desktop/bg-pattern-call-to-action.svg";
import Button from "../components/shared/Button";
import ProjectCard from "../components/shared/ProjectCard";
import imgAirFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import NavCard from "../components/shared/NavCard";

function Home() {
  return (
    <div className="">
      Home
      <Panel
        className="flex justify-center items-center flex-col text-center"
        content={
          <>
            <h1 className="text-h1 mb-6 capitalize">Graphic Design</h1>
            <p className="text-body">
              We deliver eye-catching branding materials that are <br />
              tailored to meet your business objectives.
            </p>
          </>
        }
        Pattern={BgPattern}
        patternPosition="-bottom-[70%] -left-[5%]"
      />
      footer Panel
      <ProjectCard
        img={imgAirFilter}
        title="Express"
        description="A multi-carrier shipping website for ecommerce businesses"
      />
      <div className="py-10"></div>
      <NavCard
        link="/design/web"
        title={"WEB DESIGN"}
        className={
          "w-[541px] h-[308px] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-web-design-small.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-web-design-small.jpg)]"
        }
      />
      <div className="py-10"></div>
    </div>
  );
}

export default Home;
