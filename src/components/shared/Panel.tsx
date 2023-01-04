import type { FunctionComponent, ReactNode, SVGProps } from "react";
function Panel({ content, Pattern, patternPosition, className }: PanelProps) {
  return (
    <div className="relative  tablet:rounded-[15px] overflow-hidden">
      <div className={`bg-peach ${className} w-full text-white`}>{content}</div>
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
