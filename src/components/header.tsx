import React from 'react'
import { Link } from 'gatsby'

type PropType = {
  siteTitle: string
}

const Header = ({ siteTitle }: PropType) => (
  <div>
    <div className="p-2">
      <h1 style={{ margin: 0 }}>
        <Link
          className="text-white text-2xl"
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
