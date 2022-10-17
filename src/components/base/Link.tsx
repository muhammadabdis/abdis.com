import * as React from "react";

export function Link(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) {
  return (
    <a {...props} className={`border-b border-black mt-1 ${props.className}`}>
      {props.children}
    </a>
  );
}
