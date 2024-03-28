import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NetworkIcon({color}: {color: string}) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <Path
        fill={color}
        d="M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10q2.3 0 4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q3.55 0 6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7Q9.1 7 6.563 8.088T2.1 11.1"
      />
    </Svg>
  )
}

export default NetworkIcon
