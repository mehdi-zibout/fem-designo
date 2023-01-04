import { ReactComponent as IconRight } from "../../assets/shared/desktop/icon-right-arrow.svg";
import { Link } from "react-router-dom";
function NavCard({ title, className, link }: NavCardProps) {
  return (
    <Link
      to={link}
      className={`rounded-[15px] flex justify-center items-center flex-col
        text-white  cursor-pointer ${className}
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
  className: string;
  link: string;
};
