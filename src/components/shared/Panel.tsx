import type { FunctionComponent, ReactNode, SVGProps } from "react";
function Panel({
  title,
  description,
  Pattern,
  patternPosition,
  className,
}: PanelProps) {
  return (
    <div className="relative  rounded-[15px] overflow-hidden">
      <div
        className={`bg-peach  rounded-[15px] ${className} flex-col w-full h-[252px]  text-center text-white `}
      >
        <h1 className="text-h1 mb-6 capitalize">{title}</h1>
        <p className="text-body">{description}</p>
      </div>
      <Pattern className={`absolute ${patternPosition}`} />
    </div>
  );
}

export default Panel;

type PanelProps = {
  className: string;
  title: string;
  description: ReactNode;
  Pattern: FunctionComponent<SVGProps<SVGSVGElement>>;
  patternPosition: string;
};
