import * as React from "react";
const SvgTopleft = (props:any) => (
  <svg
    width="3.5em"
    height="3.5em"
    viewBox="0 0 6.35 6.35"    
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      style={{
        fill: "#000",
        strokeWidth: 0.264583,
      }}
      d="m3.114 3.774.588-1.928"
    />
    <path
      style={{
        fill: "none",
        stroke: "#4d4d4d",
        strokeWidth: 0.264583,
      }}
      d="M1.361 5.486V1.103h4.135"
    />
    <text
      xmlSpace="preserve"
      style={{
        fontSize: ".816064px",
        fill: "none",
        stroke: "#4d4d4d",
        strokeWidth: 0.0680052,
      }}
      x={-3.273}
      y={-0.282}
      transform="scale(-1.08843 -.91875)"
    >
      <tspan
        style={{
          strokeWidth: 0.0680052,
        }}
        x={-3.273}
        y={-0.282}
      >
        {"X"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fontSize: ".934848px",
        fill: "#4d4d4d",
        stroke: "#4d4d4d",
        strokeWidth: 0.0779039,
      }}
      x={0.409}
      y={3.503}
      transform="scale(.98165 1.01869)"
    >
      <tspan
        style={{
          fill: "#4d4d4d",
          strokeWidth: 0.0779039,
        }}
        x={0.409}
        y={3.503}
      >
        {"Y"}
      </tspan>
    </text>
  </svg>
);
export default SvgTopleft;