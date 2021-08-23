
import React from 'react'
import { Link } from 'gatsby'

type Props = {
  siteAuthor: string
}

const Footer = (props: Props) => {
  return (
    <footer className="sm:px-4 md:px-20 py-4 bg-green-500 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white">by {props.siteAuthor}</p>
        <Link className="text-white" to="/about">このブログについて</Link>
        </div>
    </footer>
  )
}

export default Footer
