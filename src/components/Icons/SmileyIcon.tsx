import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.402 13.577h3.773c3.144 0 4.402-1.258 4.402-4.402V5.402C13.577 2.258 12.32 1 9.175 1H5.402C2.258 1 1 2.258 1 5.402v3.773c0 3.144 1.258 4.402 4.402 4.402Z"
      stroke="#FFB039"
      strokeWidth={0.629}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.489 5.875a.943.943 0 1 0 0-1.887.943.943 0 0 0 0 1.887v0Zm-4.402 0a.943.943 0 1 0 0-1.887.943.943 0 0 0 0 1.887Zm-.063 2.232h4.528c.314 0 .566.252.566.566a2.826 2.826 0 0 1-2.83 2.83 2.826 2.826 0 0 1-2.83-2.83c0-.314.252-.566.566-.566v0Z"
      stroke="#FFB039"
      strokeWidth={0.629}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default React.memo(SvgComponent)

