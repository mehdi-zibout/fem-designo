import type { FunctionComponent, ReactNode, SVGProps } from "react";
function Panel({ content, Pattern, patternPosition, className }: PanelProps) {
  return (
    <div className="relative  rounded-[15px] overflow-hidden">
      <div
        className={`bg-peach  rounded-[15px] ${className}  w-full h-[252px]   text-white `}
      >
        {content}
      </div>
      <Pattern className={`absolute  ${patternPosition}`} />
    </div>
  );
}

export default Panel;

type PanelProps = {
  className: string;
  content: ReactNode;
  Pattern: FunctionComponent<SVGProps<SVGSVGElement>>;
  patternPosition: string;
};
