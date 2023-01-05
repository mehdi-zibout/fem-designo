import { useParams } from "react-router-dom";
import Panel from "../components/shared/Panel";
import ProjectCard from "../components/shared/ProjectCard";
import NavCard from "../components/shared/NavCard";
import { getData } from "../Data/data";
import { ReactComponent as Leaf } from "../assets/shared/desktop/bg-pattern-leaf.svg";
import ScrollToTop from "../components/shared/ScrollToTop";

function Design() {
  const { type } = useParams();
  const info = getData(type);
  if (info) {
    const { data, navigation } = info;
    return (
      <ScrollToTop>
        <div className="desktop:mb-40 tablet:mb-[7.5rem] mb-24">
          <Panel
            className="flex justify-center items-center flex-col text-center tablet:h-[15.75rem] h-[20rem]"
            content={data.introPanel.content}
            Pattern={data.introPanel.Pattern}
            patternPosition={data.introPanel.patternPosition}
          />
          <Leaf className="absolute left-3 top-[34.8%] -z-10 hidden desktop:block" />
        </div>
        <div className="desktop:mb-40 tablet:mb-[7.5rem]   mb-24 desktop:grid-cols-3 desktop:gap-8 desktop:grid">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.id}
              img={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <div className="desktop:mb-40 tablet:mb-[7.5rem] px-6 tablet:px-0   mb-24 flex-col desktop:flex-row items-center flex justify-between">
          {navigation.map((nav) => (
            <NavCard
              key={nav.title}
              title={`${nav.title} DESIGN`}
              className={nav.className}
              link={`/design/${nav.title}`}
            />
          ))}
        </div>
      </ScrollToTop>
    );
  }
  return <div className="">404</div>;
}

export default Design;
