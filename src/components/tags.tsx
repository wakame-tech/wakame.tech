import React from 'react'
import { tagMap } from '../utils/tagMap'

const Tags = (props: { tags: string[] }) => {
    const prefixEmoji = (tag: string) => {
        for (let [emoji, items] of Object.entries(tagMap)) {
            if (items.includes(tag)) {
                return emoji
            }
        }

        return `🔖`
    }

    return (
        <div>
            {props.tags.map(tag =>
                <div key={tag} className="px-2 py-1 mr-1 bg-green-600 rounded-sm inline-block">
                    <div className="text-white font-light text-xs">
                        {prefixEmoji(tag)} {tag}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Tags