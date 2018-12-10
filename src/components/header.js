import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <link to="/"><img src="" width="30" /></link>
      <link to="/courses">Courses</link>
      <link to="/downloads">Downloads</link>
      <link to="/workshops">Workshops</link>
      <link to="/buy"><button>Buy</button></link>
    </div>
  </div>
)

export default Header
