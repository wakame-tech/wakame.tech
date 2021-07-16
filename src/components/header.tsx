import React from 'react'
import { Link } from 'gatsby'

type Props = {
  siteTitle: string
  siteDescription: string
}

const Header = ({ siteTitle, siteDescription }: Props) => (
  <div>
    <div className="flex items-end">
      <div className="p-2">
        <Link
          to="/"
          className="text-green-700 text-2xl"
          style={{
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </div>

      <div className="p-2">
        <p className="text-gray-500">{siteDescription}</p>
      </div>

      <div className="p-2">
        <Link
          to="/about"
          className="text-green-700"
        >
          about
        </Link>
      </div>
{/* 
      <div className="p-2">
        <Link
          to="/tags"
          className="text-green-700"
        >
          tags
        </Link>
      </div> */}

      <div className="p-2">
        <Link
          to="/works"
          className="text-green-700"
        >
          works
        </Link>
      </div>
    </div>
  </div>
)

export default Header
