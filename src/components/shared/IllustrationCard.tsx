import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  SVGProps,
} from "react";
import { ReactComponent as Passionate } from "../../assets/home/desktop/illustration-passionate.svg";

function IllustrationCard({
  title,
  children,
  cerclePosition,
  Illustration,
  className,
  ...props
}: IllustrationCardProps) {
  return (
    <div
      className={
        "flex justify-center items-center  flex-col  tablet:flex-row desktop:flex-col " +
        className
      }
      {...props}
    >
      <div className="relative w-[202px] h-[202px]">
        <div
          className={`${cerclePositionToTailwind(
            cerclePosition
          )}  bg-[linear-gradient(90deg,_rgba(93,_2,_2,_0.0001)_0%,_rgba(93,_2,_2,_0.497569)_100%)] opacity-20 rounded-full mix-blend-normal w-[202px] h-[202px]`}
        ></div>
        <Illustration className="absolute top-0 left-0 right-0 bottom-0 m-auto" />
      </div>
      <div className="desktop:mt-12 tablet:ml-12 tablet:mt-0 mt-12 desktop:ml-0">
        <h4 className="text-h3 text-center tablet:text-left desktop:text-center desktop:mb-8 tablet:mb-4 mb-8 uppercase">
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
}

export default IllustrationCard;

type IllustrationCardProps = {
  title: string;
  children: ReactNode;
  Illustration: FunctionComponent<SVGProps<SVGSVGElement>>;
  cerclePosition: "top" | "bottom" | "left" | "right";
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function cerclePositionToTailwind(pos: "top" | "bottom" | "left" | "right") {
  switch (pos) {
    case "bottom":
      return "rotate-90";

    case "left":
      return "rotate-180";

    case "right":
      return "";

    case "top":
      return "-rotate-90";
  }
}
