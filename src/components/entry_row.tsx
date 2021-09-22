import { Link } from 'gatsby'
import React from 'react'
import { Entry } from '../model'

export type EntryRowProps = {
  entry: Entry
}

const EntryRow = ({ entry }: EntryRowProps) => {
  return (
    <li>
      <span className="pr-2 text-gray-600">{entry.date}</span>
      <Link to={entry.to} >
        <span className="pr-1">[{entry.tags.map(tag => `#${tag}`).join(' ')}]</span>
        <span>{entry.title}</span>
      </Link>
    </li>
  )
}

export default EntryRow