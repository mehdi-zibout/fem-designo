import { ReactComponent as GraphicPattern } from "../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";
import imgAirFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import imgTimBrown from "../assets/graphic-design/desktop/image-change.jpg";
import imgBoxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import imgScience from "../assets/graphic-design/desktop/image-science.jpg";
import { stringify } from "postcss";

const DATA = [
  {
    id: 1,
    introPanel: {
      content: (
        <>
          <h1 className="text-h1 mb-6 capitalize">Graphic Design</h1>
          <p className="text-body">
            We deliver eye-catching branding materials that are <br />
            tailored to meet your business objectives.
          </p>
        </>
      ),
      Pattern: GraphicPattern,
      patternPosition: "-bottom-[70%] -left-[5%] ",
    },
    projects: [
      {
        id: 1,
        title: "tim brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
        image: imgTimBrown,
      },
      {
        id: 2,
        title: "boxed water",
        description: "A simple packaging concept made for Boxed Water",
        image: imgBoxedWater,
      },
      {
        id: 3,
        title: "science!",
        description:
          "A poster made in collaboration with the Federal Art Project",
        image: imgScience,
      },
    ],
  },
];
type dataType = {
  data: typeof DATA[0];
  navigation: { title: string; className: string }[];
};
export function getData(design: string | undefined): dataType | undefined {
  switch (design) {
    case "graphic":
      return {
        data: DATA[0],
        navigation: [
          {
            title: "app",
            className:
              "mb-6 desktop:mb-0 w-full bg-cover desktop:w-[541px] h-[308px] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-app-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-app-design.jpg)]",
          },
          {
            title: "web",
            className:
              "desktop:w-[541px] bg-cover w-full h-[308px] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-web-design-small.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-web-design-small.jpg)]",
          },
        ],
      };

    default:
      break;
  }
}
