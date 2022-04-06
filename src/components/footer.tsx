import { Link } from "gatsby"
import React from "react"

type Props = {
  siteAuthor: string
}

const Footer = (props: Props) => {
  return (
    <footer className="p-4 bg-teal-500 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link className="text-white underline" to="/bio">
          by {props.siteAuthor}
        </Link>
        <Link className="text=white underline" to="/about">
          このブログについて
        </Link>
      </div>
    </footer>
  )
}

export default Footer
