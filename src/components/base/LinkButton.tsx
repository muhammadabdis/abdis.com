import * as React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: string;
}

export function LinkButton(props: Props) {
  return (
    <a
      className="inline-block font-bold bg-none border py-3.5 px-4 rounded-2xl border-[#AAAAAA] hover:bg-black hover:text-[#FBF2ED] hover:border-black"
      {...props}
    >
      {props.children}
    </a>
  );
}
