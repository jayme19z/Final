import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#f2ece3"
  >
    <rect x="0" y="259" rx="5" ry="5" width="280" height="30" />
    <rect x="0" y="301" rx="5" ry="5" width="280" height="88" />
    <rect x="10" y="485" rx="0" ry="0" width="128" height="29" />
    <rect x="236" y="429" rx="0" ry="0" width="0" height="12" />
    <rect x="148" y="401" rx="5" ry="5" width="128" height="30" />
    <rect x="122" y="442" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="401" rx="5" ry="5" width="128" height="30" />
    <circle cx="134" cy="124" r="124" />
  </ContentLoader>
)

export default Skeleton