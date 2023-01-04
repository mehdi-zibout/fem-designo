import { ReactComponent as IconRight } from "../../assets/shared/desktop/icon-right-arrow.svg";
import { Link } from "react-router-dom";
function NavCard({ title, imageUrl, size, link }: NavCardProps) {
  const bg = `bg-[linear-gradient(rgba(0,_0,_0,_0.5)_100%,_rgba(0,_0,_0,_0.5)100%),url(${imageUrl})]`;
  const bgHover = `hover:bg-[linear-gradient(rgba(231,_129,_107,_0.8)_100%,_rgba(231,_129,_107,_0.8)_100%),url(${imageUrl})]`;
  return (
    <Link
      to={link}
      className={`rounded-[15px] flex justify-center items-center flex-col
       ${size} text-white ${bg} ${bgHover} 
     cursor-pointer
       `}
    >
      <div className="uppercase text-h2 pb-6">{title}</div>
      <div className="text-[15px] leading-[21.68px] font-medium tracking-[5px]">
        VIEW PROJECTS <IconRight className="inline-block" />
      </div>
    </Link>
  );
}

export default NavCard;

type NavCardProps = {
  title: string;
  size: string;
  imageUrl: string;
  link: string;
};
