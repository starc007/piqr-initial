import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.695 10.687a2.086 2.086 0 0 0-.013-1.169 2.25 2.25 0 0 0-.647-1.01 2.585 2.585 0 0 0-1.112-.588 2.763 2.763 0 0 0-1.287-.012c-.879.197-1.598.85-1.815 1.649-.107.384-.102.787.014 1.169.115.382.338.73.647 1.01.308.28.691.483 1.112.588.42.106.864.11 1.286.012.89-.197 1.61-.85 1.815-1.649Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.126 16.754a9.115 9.115 0 0 0 2.348-3.018 8.351 8.351 0 0 0 .061-7.108A9.111 9.111 0 0 0 18.36 3.67a10.153 10.153 0 0 0-3.255-1.976A10.915 10.915 0 0 0 11.265 1c-1.317 0-2.622.236-3.839.694A10.154 10.154 0 0 0 4.171 3.67a9.111 9.111 0 0 0-2.175 2.958 8.399 8.399 0 0 0-.764 3.488c0 2.635 1.233 5.01 3.208 6.669"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.7 14.02c-1.05-1.017-1.701-2.386-1.701-3.9 0-3.143 2.808-5.694 6.266-5.694 3.46 0 6.267 2.551 6.267 5.694 0 1.514-.65 2.872-1.7 3.9m-6.507 2.188-1.644 1.856c-1.3 1.483-.148 3.671 1.94 3.671h3.277c2.089 0 3.253-2.198 1.94-3.671l-1.643-1.857c-.982-1.13-2.877-1.13-3.87 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


export default React.memo(SvgComponent)
