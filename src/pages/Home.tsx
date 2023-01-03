import Panel from "../components/shared/Panel";
import { ReactComponent as BgPattern } from "../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";
import { ReactComponent as CallToActionPattern } from "../assets/shared/desktop/bg-pattern-call-to-action.svg";
import Button from "../components/shared/Button";

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
    </div>
  );
}

export default Home;
