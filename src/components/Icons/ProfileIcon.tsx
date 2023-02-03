import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={14.644} cy={14.966} r={14.644} fill="#FFF4E5" />
    <path
      d="M14.639 13.983a1.62 1.62 0 0 0-.304 0 4.01 4.01 0 0 1-2.79-1.283 4.275 4.275 0 0 1-1.139-2.927c0-2.328 1.822-4.22 4.086-4.22.536-.01 1.068.09 1.567.292.5.203.954.505 1.34.89.386.384.695.843.909 1.35a4.332 4.332 0 0 1 .056 3.226 4.232 4.232 0 0 1-.86 1.384 4.082 4.082 0 0 1-1.309.938c-.491.222-1.02.34-1.556.35Zm-4.601 3.507c-2.227 1.54-2.227 4.049 0 5.58 2.53 1.748 6.68 1.748 9.211 0 2.227-1.54 2.227-4.05 0-5.58-2.521-1.739-6.671-1.739-9.211 0Z"
      stroke="#FFB039"
      strokeWidth={1.046}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


export default memo(SvgComponent)
