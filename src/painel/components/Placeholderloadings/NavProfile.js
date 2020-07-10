import React from "react"
import ContentLoader from "react-content-loader"

const NavProfile = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={63}
    viewBox="0 0 320 63"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="96" y="25" rx="3" ry="3" width="165" height="13" /> 
    <circle cx="293" cy="32" r="20" /> 
    <circle cx="50" cy="32" r="13" /> 
    <circle cx="13" cy="32" r="13" />
  </ContentLoader>
)

export default NavProfile

