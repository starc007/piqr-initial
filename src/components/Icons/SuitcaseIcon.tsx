import React, { SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="sm:w-6 sm:h-6 w-5 h-5"
      fill="none"
      viewBox="0 0 35 35"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M10.731 7.6V6.28c0-2.92 0-5.28 5.415-5.28h2.708c5.415 0 5.415 2.36 5.415 5.28V7.6M10.73 34H24.27c6.802 0 8.02-2.657 8.376-5.89l1.269-13.2c.457-4.027-.728-7.31-7.953-7.31H9.039c-7.225 0-8.41 3.284-7.953 7.31l1.27 13.2C2.71 31.343 3.928 34 10.73 34z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M33.83 15.852a28.307 28.307 0 01-12.945 4.983M1.628 16.297a27.988 27.988 0 0012.488 4.554m6.769-1.7v1.684c0 1.798-.017 3.267-3.385 3.267-3.35 0-3.384-1.452-3.384-3.25v-1.7c0-1.65 0-1.65 1.692-1.65h3.385c1.692 0 1.692 0 1.692 1.65z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
