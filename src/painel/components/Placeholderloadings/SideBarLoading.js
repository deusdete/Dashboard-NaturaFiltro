import React from "react"
import ContentLoader from "react-content-loader"

const SideBarLoading = (props) => (
  <ContentLoader 
    speed={2}
    width={255}
    height={655}
    viewBox="0 0 255 655"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="88" y="18" rx="3" ry="3" width="88" height="6" /> 
    <rect x="86" y="33" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="58" cy="27" r="20" /> 
    <rect x="28" y="69" rx="0" ry="0" width="167" height="27" /> 
    <circle cx="40" cy="151" r="14" /> 
    <rect x="70" y="146" rx="0" ry="0" width="126" height="11" /> 
    <circle cx="40" cy="207" r="14" /> 
    <rect x="70" y="202" rx="0" ry="0" width="126" height="11" /> 
    <circle cx="40" cy="266" r="14" /> 
    <rect x="70" y="261" rx="0" ry="0" width="126" height="11" /> 
    <circle cx="40" cy="321" r="14" /> 
    <rect x="70" y="316" rx="0" ry="0" width="126" height="11" /> 
    <circle cx="40" cy="377" r="14" /> 
    <rect x="70" y="372" rx="0" ry="0" width="126" height="11" /> 
    <circle cx="40" cy="433" r="14" /> 
    <rect x="70" y="428" rx="0" ry="0" width="126" height="11" /> 
    <circle cx="40" cy="492" r="14" /> 
    <rect x="70" y="487" rx="0" ry="0" width="126" height="11" /> 
    <circle cx="40" cy="548" r="14" /> 
    <rect x="70" y="543" rx="0" ry="0" width="126" height="11" />
  </ContentLoader>
)

export default SideBarLoading

