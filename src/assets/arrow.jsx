import React from "react";

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="82"
      height="82"
      fill="none"
      viewBox="0 0 82 82"
    >
      <path
        fill="url(#pattern0)"
        d="M79.979 0H159.97899999999998V80H79.979z"
        transform="rotate(88.676 79.979 0)"
      ></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_118_71"></use>
        </pattern>
        <image
          id="image0_118_71"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default Arrow;