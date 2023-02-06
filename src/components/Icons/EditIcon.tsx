import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
  height={32}
  width={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.655 1.73 2.93 7.79c-.216.23-.426.683-.467.997l-.258 2.26c-.091.815.495 1.373 1.304 1.234l2.245-.384c.314-.056.753-.286.97-.523l5.724-6.06c.99-1.046 1.437-2.238-.104-3.695C10.81.175 9.645.684 8.654 1.73v0Z"
      stroke="currentColor"
      strokeWidth={1.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.7 2.74a4.272 4.272 0 0 0 3.8 3.591m-10 8.229h12.552"
      stroke="currentColor"
      strokeWidth={1.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


export default memo(SvgComponent)
