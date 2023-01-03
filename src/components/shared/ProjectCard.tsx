import imgAirFilter from "../../assets/app-design/desktop/image-airfilter.jpg";
function ProjectCard({ img, title, description }: ProjectCardProps) {
  return (
    <div className="px-6 tablet:px-0 cursor-pointer">
      <div className="group overflow-hidden w-full  tablet:px-0  rounded-t-[15px] rounded-b-[15px] desktop:w-[350px]  tablet:flex desktop:block  tablet:rounded-l-[15px] tablet:rounded-r-[15px] ">
        <div className="h-2/3">
          <img src={img} className="" alt={title + " " + description} />
        </div>
        <div className="p-8 text-center flex justify-center items-center flex-col group-hover:bg-peach  bg-[#FDF3F0] transition duration-500">
          <h2 className="text-peach cursor-text text-h3 mb-4 group-hover:text-white  transition duration-500">
            {title}
          </h2>
          <p className="text-body text-darkGrey cursor-text desktop:w-[286px] group-hover:text-white tablet:w-[277px] w-[267px]  transition duration-500">
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
