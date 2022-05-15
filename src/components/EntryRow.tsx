import { Link } from 'gatsby'
import React from 'react'
import { Entry } from '../model'
import Tags from './tags'

export type EntryRowProps = {
  entry: Entry
}

const EntryRow = ({ entry }: EntryRowProps) => {
  return (
    <li className="pb-1">
      <span className="pr-2">{entry.date}</span>
      [
      <Tags tags={entry.tags} />
      ]
      <br />
      <Link to={entry.to}>
        <span className="text-lg">{entry.title}</span>
      </Link>
    </li>
  )
}

export default EntryRow
