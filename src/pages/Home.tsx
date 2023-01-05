import Panel from "../components/shared/Panel";
import Button from "../components/shared/Button";
import { ReactComponent as bgCercle } from "../assets/home/desktop/bg-pattern-hero-home.svg";
import imgPhone from "../assets/home/desktop/image-hero-phone.png";
function Home() {
  return (
    <div className="mb-40">
      <Panel
        className={
          "desktop:py-[9rem] desktop:px-[5.94rem] flex justify-between items-start"
        }
        content={
          <>
            <div className="w-[60%]">
              <h1 className="text-h1 text-white z-10">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="text-body text-white py-10 w-[75%]">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <Button isDark>LEARN MORE</Button>
            </div>
            <img
              src={imgPhone}
              alt="A phone"
              className="absolute top-0 -right-16"
            />
          </>
        }
        Pattern={bgCercle}
        patternPosition={
          "top-0 right-0 hover:translate-x-16 group-hover:translate-y-10 transition duration-[30s]"
        }
      />
    </div>
  );
}

export default Home;
