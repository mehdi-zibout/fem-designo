import imgAirFilter from "../../assets/app-design/desktop/image-airfilter.jpg";
function ProjectCard({ img, title, description }: ProjectCardProps) {
  return (
    <div className="px-6 tablet:px-0 cursor-pointer  tablet:mb-8 desktop:mb-0 mb-10">
      <div
        className="group overflow-hidden w-full  rounded-[15px] 
      desktop:max-w-[21.875rem] h-[29.875rem] tablet:h-[19.375rem] desktop:h-[29.875rem]  tablet:flex desktop:block"
      >
        <div
          className="tablet:h-full tablet:w-1/2 desktop:w-full desktop:h-2/3 h-2/3 bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* <img
            src={img}
            className="w-full h-auto min-h-full min-w-full bg-cover"
            alt={title + " " + description}
          /> */}
        </div>
        <div className="p-8 text-center tablet:w-1/2 desktop:w-full flex justify-center items-center flex-col group-hover:bg-peach  bg-[#FDF3F0] transition duration-500">
          <h2 className="text-peach uppercase cursor-text text-h3 mb-4 group-hover:text-white  transition duration-500">
            {title}
          </h2>
          <p className="text-body text-darkGrey cursor-text desktop:max-w-[286px] group-hover:text-white tablet:max-w-[277px] max-w-[267px]  transition duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

type ProjectCardProps = {
  img: string;
  title: string;
  description: string;
};
