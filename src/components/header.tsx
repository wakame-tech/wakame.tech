import { Link } from "gatsby"
import React from "react"

type Props = {
  siteTitle: string
  siteDescription: string
}

const routes = [
  {
    name: "記事",
    path: "/",
  },
  {
    name: "やったこと",
    path: "/works",
  },
  {
    name: "タグ一覧",
    path: "/tags",
  },
]

const Header = ({ siteTitle, siteDescription }: Props) => {
  return (
    <div className="pt-4 bg-light-50">
      <div className="flex flex-wrap sm:flex-row items-end">
        <div className="px-2">
          <Link
            to="/"
            className="text-teal-500 text-2xl font-bold"
            style={{
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </div>

        <div className="px-2">
          <p className="text-teal-500 text-xs">{siteDescription}</p>
        </div>

        <div className="px-2">
          {routes.map(route => (
            <span key={route.path} className="pl-2">
              <Link to={route.path}>{route.name}</Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
