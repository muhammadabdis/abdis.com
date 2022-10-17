import * as React from "react";

export interface SvgRootProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export default function SvgRoot(props: SvgRootProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewBox}
      className={`h-[1em] inline-block ${props.className}`}
    >
      {props.children}
    </svg>
  );
}
