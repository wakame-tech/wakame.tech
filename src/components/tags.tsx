import React from "react"

const Tags = (props: { tags: string[] }) => {
  return (
    <div>
      {props.tags.map(tag => (
        <div key={tag} className="px-1 py-1 mr-1 inline-block">
          <span className="text-blue-500 dark:text-blue-200 font-bold text-xs">
            #{tag}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Tags
