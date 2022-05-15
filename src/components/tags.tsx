import React from 'react'

const Tags = (props: { tags: string[] }) => {
  return (
    <span>
      {props.tags.map(tag => (
        <div key={tag} className="px-1 py-1 mr-1 inline-block">
          <span>
            <a className="text-blue-500" href="/tags">
              #{tag}
            </a>
          </span>
        </div>
      ))}
    </span>
  )
}

export default Tags
