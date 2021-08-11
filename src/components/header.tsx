import React from 'react'
import { Link } from 'gatsby'

type Props = {
  siteTitle: string
  siteDescription: string
}

const Header = ({ siteTitle, siteDescription }: Props) => {
  const routes = {
    about: '/about',
    works: '/works',
    tags: '/tags',
  }

  return (
    <div>
      <div className="flex flex-wrap items-end">
        <div className="p-2">
          <Link
            to="/"
            className="text-green-700 text-2xl"
            style={{
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </div>

        <div className="p-2">
          <p className="text-gray-500">{siteDescription}</p>
        </div>

        {Object.entries(routes).map((route) => (
          <div key={route[0]} className="pl-2">
            <Link
              to={route[1]}
            >
              {route[0]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
