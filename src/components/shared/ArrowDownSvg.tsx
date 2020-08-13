import React, { ReactElement } from "react";

interface Props {
  isExpanded: boolean;
}

export default function ArrowDownSvg({ isExpanded }: Props): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isExpanded ? "" : "rotate"}
    >
      <path
        d="M5.84302 9.59299L11.5 15.25L17.157 9.59299L16.45 8.88599L11.5 13.836L6.55002 8.88599L5.84302 9.59299Z"
        fill="black"
      />
    </svg>
  );
}
