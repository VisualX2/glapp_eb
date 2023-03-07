import * as React from "react";       
const SvgTopright = (props:any) => (      
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
        strokeWidth: 0.269459,
      }}
      d="M5.136 5.548v-4.38H.844"
    />
    <text
      xmlSpace="preserve"
      style={{
        fontSize: ".816064px",
        fill: "none",
        stroke: "#4d4d4d",
        strokeWidth: 0.0680052,
      }}
      x={-3.04}
      y={-0.268}
      transform="scale(-1.08843 -.91875)"
    >
      <tspan
        style={{
          strokeWidth: 0.0680052,
        }}
        x={-3.04}
        y={-0.268}
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
      x={5.638}
      y={3.404}
      transform="scale(.98165 1.01869)"
    >
      <tspan
        style={{
          fill: "#4d4d4d",
          strokeWidth: 0.0779039,
        }}
        x={5.638}
        y={3.404}
      >
        {"Y"}
      </tspan>
    </text>
  </svg>
);
export default SvgTopright;