import Panel from "../components/shared/Panel";
import { ReactComponent as BgPattern } from "../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";

function Home() {
  return (
    <div className="">
      Home
      <Panel
        className="flex justify-center items-center flex-col"
        title="Graphic Design"
        description={
          <>
            We deliver eye-catching branding materials that are <br /> tailored
            to meet your business objectives.
          </>
        }
        Pattern={BgPattern}
        patternPosition="-bottom-[70%] -left-[5%]"
      />
    </div>
  );
}

export default Home;
