import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.815 20.372H6.419c-3.418 0-5.697-1.71-5.697-5.698V6.698C.722 2.709 3 1 6.419 1h11.396c3.418 0 5.697 1.71 5.697 5.698v7.976c0 3.989-2.279 5.698-5.697 5.698Z"
      stroke="#9154E0"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m20.094 4.232-4.993 4.573c-1.644 1.5-4.34 1.5-5.983 0L4.141 4.232"
      stroke="#9154E0"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


export default React.memo(SvgComponent)
