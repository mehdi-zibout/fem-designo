import type { FunctionComponent, ReactNode, SVGProps } from "react";
function Panel({
  content,
  Pattern,
  patternPosition,
  className,
  bg = "bg-peach ",
}: PanelProps) {
  return (
    <div className="relative  tablet:rounded-[15px] overflow-hidden group">
      <div className={`${bg} ${className} w-full text-white`}>{content}</div>
      <Pattern className={`absolute  ${patternPosition}`} />
    </div>
  );
}

export default Panel;

type PanelProps = {
  className?: string;
  content: ReactNode;
  Pattern: FunctionComponent<SVGProps<SVGSVGElement>>;
  patternPosition: string;
  bg?: string;
};
