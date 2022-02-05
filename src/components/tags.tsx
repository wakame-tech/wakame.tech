import React from "react"

const Tags = (props: { tags: string[] }) => {
  return (
    <div>
      {props.tags.map(tag => (
        <div key={tag} className="px-1 py-1 mr-1 inline-block">
          <div className="text-blue-600 font-bold text-xs">
            #{tag}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tags
