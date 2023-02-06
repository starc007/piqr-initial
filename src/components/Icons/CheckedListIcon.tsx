import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="31"
    height="32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M22.268 1.04c2.518 0 5.037-.002 7.556 0 .84.001 1.378.698 1.103 1.409-.158.408-.548.675-1.028.679-.718.007-1.436.002-2.154.002H14.684c-.796 0-1.334-.573-1.187-1.253.109-.504.556-.836 1.146-.836 2.542-.002 5.083-.001 7.625-.001ZM22.24 10.45c2.54 0 5.082-.002 7.624.002.533 0 .935.285 1.082.742.142.442-.019.936-.449 1.162a1.735 1.735 0 0 1-.777.177c-4.353.01-8.707.008-13.06.008-.674 0-1.346.003-2.019-.001-.672-.004-1.157-.438-1.163-1.032-.007-.609.482-1.056 1.17-1.057 2.531-.003 5.06-.001 7.591-.001ZM22.26 21.952l-7.625-.001c-.545 0-.944-.266-1.101-.718-.146-.42-.023-.885.363-1.135.195-.128.458-.226.69-.226a4928.16 4928.16 0 0 1 15.284-.008c.642 0 1.12.454 1.123 1.037.003.596-.48 1.05-1.144 1.05-2.53.003-5.06.002-7.59.002v-.001ZM2.955 3.695l2.362-1.503C6.34 1.542 7.362.888 8.387.24c.61-.385 1.262-.294 1.62.223.36.52.202 1.126-.408 1.515-2.11 1.347-4.223 2.692-6.338 4.035-.732.465-1.383.298-1.776-.446C1.04 4.722.595 3.877.155 3.03-.164 2.412.022 1.794.6 1.524c.583-.273 1.19-.04 1.521.585.272.512.54 1.027.834 1.585ZM2.98 12.058l2.055-1.307c1.157-.735 2.312-1.472 3.47-2.205.402-.256.82-.259 1.218-.01.389.243.58.616.458 1.04-.07.253-.24.543-.46.685a608.646 608.646 0 0 1-6.559 4.189c-.577.364-1.256.2-1.574-.383a91.422 91.422 0 0 1-1.464-2.8c-.268-.534-.03-1.133.509-1.383a1.116 1.116 0 0 1 1.454.48c.156.278.296.563.444.844l.45.85h-.002ZM2.998 20.41l1.033-.655c1.459-.93 2.919-1.855 4.376-2.788.286-.183.585-.296.931-.22.453.099.752.369.846.8.097.444-.052.823-.45 1.084-.544.358-1.097.703-1.645 1.053-1.582 1.007-3.163 2.016-4.746 3.021-.808.514-1.43.358-1.863-.467-.434-.825-.868-1.651-1.296-2.479-.321-.619-.14-1.23.44-1.506.576-.274 1.19-.04 1.52.585.263.494.523.99.784 1.484.01.018.027.034.071.088h-.002Z" />
    </g>
    <path
      d="M22.234 30.23c-2.542 0-5.083 0-7.625-.002-.546 0-.944-.266-1.101-.718-.146-.42-.023-.885.362-1.135.196-.128.459-.226.69-.226 5.096-.012 10.19-.012 15.284-.008.642 0 1.12.454 1.123 1.037.004.596-.48 1.05-1.144 1.05-2.53.004-5.06.002-7.59.002ZM2.971 28.687l1.033-.655c1.46-.929 2.92-1.855 4.377-2.788.286-.183.585-.296.931-.22.453.1.752.369.846.801.097.444-.052.822-.45 1.083-.544.358-1.097.703-1.646 1.053-1.581 1.008-3.163 2.016-4.745 3.022-.808.513-1.43.357-1.863-.468-.435-.825-.868-1.651-1.297-2.479-.32-.619-.139-1.23.44-1.506.577-.274 1.19-.039 1.521.585.263.495.522.99.784 1.485.01.018.027.034.071.088l-.002-.001Z"
      fill="currentColor"
    />
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h31v23H0z" />
      </clipPath>
    </defs>
  </svg>
)


export default React.memo(SvgComponent)