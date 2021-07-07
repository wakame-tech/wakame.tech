import React from 'react'
import { Link } from 'gatsby'

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <div className="bg-green-700">
    <div className="p-2">
      <Link
        to="/"
        className="text-white text-2xl"
        style={{
          textDecoration: 'none'
        }}
      >
        {siteTitle} (WIP)
      </Link>
    </div>
  </div>
)

export default Header
