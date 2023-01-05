import { ReactComponent as GraphicPattern } from "../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";
import { ReactComponent as WebPattern } from "../assets/web-design/desktop/bg-pattern-intro-web.svg";
import { ReactComponent as AppPattern } from "../assets/app-design/desktop/bg-pattern-intro-app.svg";

import imgAirFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import imgTimBrown from "../assets/graphic-design/desktop/image-change.jpg";
import imgBoxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import imgScience from "../assets/graphic-design/desktop/image-science.jpg";
import imgExpress from "../assets/web-design/desktop/image-express.jpg";
import imgTransfer from "../assets/web-design/desktop/image-transfer.jpg";
import imgPhoton from "../assets/web-design/desktop/image-photon.jpg";
import imgBuilder from "../assets/web-design/desktop/image-builder.jpg";
import imgBlogr from "../assets/web-design/desktop/image-blogr.jpg";
import imgCamp from "../assets/web-design/desktop/image-camp.jpg";
import imgAirfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import imgEyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import imgFaceit from "../assets/app-design/desktop/image-faceit.jpg";
import imgTodo from "../assets/app-design/desktop/image-todo.jpg";
import imgLoopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

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
      patternPosition:
        "-bottom-[70%] -left-[5%] group-hover:translate-x-36 group-hover:translate-y-20 transition duration-[30s]",
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
  {
    id: 2,
    introPanel: {
      content: (
        <>
          <h1 className="text-h1 mb-6 capitalize z-10">Web Design</h1>
          <p className="text-body">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </>
      ),
      Pattern: WebPattern,
      patternPosition:
        "-bottom-[70%] -left-[0%] group-hover:translate-x-36 group-hover:translate-y-20 transition duration-[30s]",
    },
    projects: [
      {
        id: 1,
        title: "express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: imgExpress,
      },
      {
        id: 2,
        title: "transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
        image: imgTransfer,
      },
      {
        id: 3,
        title: "photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: imgPhoton,
      },
      {
        id: 4,
        title: "builder",
        description:
          "Connects users with local contractors based on their location",
        image: imgBuilder,
      },
      {
        id: 5,
        title: "blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
        image: imgBlogr,
      },
      {
        id: 6,
        title: "camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        image: imgCamp,
      },
    ],
  },
  {
    id: 3,
    introPanel: {
      content: (
        <>
          <h1 className="text-h1 mb-6 capitalize">App Design</h1>
          <p className="text-body">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </>
      ),
      Pattern: AppPattern,
      patternPosition:
        "-bottom-[80%] -left-[10%] group-hover:translate-x-36 group-hover:translate-y-20 transition duration-[30s]",
    },
    projects: [
      {
        id: 1,
        title: "Airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
        image: imgAirfilter,
      },
      {
        id: 2,
        title: "Eyecam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
        image: imgEyecam,
      },
      {
        id: 3,
        title: "Faceit",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
        image: imgFaceit,
      },
      {
        id: 4,
        title: "Todo",
        description:
          "A todo app that features cloud sync with light and dark mode",
        image: imgTodo,
      },
      {
        id: 5,
        title: "Loopstudios",
        description: "A VR experience app made for Loopstudios",
        image: imgLoopstudios,
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
              "mb-6 desktop:mb-0 desktop:mr-4 w-full bg-cover desktop:w-[541px] h-[308px] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-app-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-app-design.jpg)]",
          },
          {
            title: "web",
            className:
              "desktop:w-[541px] bg-cover desktop:ml-4 w-full h-[308px] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-web-design-small.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-web-design-small.jpg)]",
          },
        ],
      };
    case "web":
      return {
        data: DATA[1],
        navigation: [
          {
            title: "app",
            className:
              "mb-6 desktop:mb-0 desktop:mr-4 w-full bg-cover desktop:w-[33.81rem] desktop:h-[19.25rem]   tablet:h-[12.5rem]  h-[15.625rem] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-app-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-app-design.jpg)]",
          },
          {
            title: "graphic",
            className:
              "desktop:w-[33.81rem] bg-cover desktop:ml-4 w-full desktop:h-[19.25rem]  tablet:h-[12.5rem] h-[15.625rem] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-graphic-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-graphic-design.jpg)]",
          },
        ],
      };
    case "app":
      return {
        data: DATA[2],
        navigation: [
          {
            title: "web",
            className:
              "mb-6 desktop:mb-0 desktop:mr-4 w-full bg-cover desktop:h-[19.25rem]   tablet:h-[12.5rem] desktop:w-[33.81rem] h-[15.625rem]  bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-web-design-small.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-web-design-small.jpg)]",
          },
          {
            title: "graphic",
            className:
              "desktop:w-[33.81rem] bg-cover desktop:ml-4 w-full desktop:h-[19.25rem]  tablet:h-[12.5rem] h-[15.625rem] bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(./assets/home/desktop/image-graphic-design.jpg)] hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(./assets/home/desktop/image-graphic-design.jpg)]",
          },
        ],
      };
    default:
      break;
  }
}
