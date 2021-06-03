import React from 'react'
import { tagMap } from '../utils/tagMap'

const Tags = (props: { tags: string[] }) => {
    const prefixedEmoji = (tag: string) => {
        for (let [emoji, items] of Object.entries(tagMap)) {
            if (items.includes(tag)) {
                return `${emoji} ${tag}`
            }
        }

        return tag
    }

    return (
        <div>
            {props.tags.map(tag =>
                <div key={tag} className="ml-2 px-2 py-1 bg-green-800 rounded-md inline-block">
                    <div className="text-white font-bold text-xs">
                        {prefixedEmoji(tag)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Tags