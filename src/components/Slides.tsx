import React from "react"
import { slides } from "../utils/slides"
import EntryRow from "./entry_row"
import Title from "./title"

const Slides = () => {
  return (
    <div>
      <header className="py-2">
        <Title title="slides" />
      </header>
      <div className="m-auto">
        <ul className="list-none">
          {slides.map(entry => (
            <div className="" key={entry.to}>
              <EntryRow entry={entry} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slides
