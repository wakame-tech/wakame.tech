import React from 'react'
import { ContentfulWork } from '../../types/graphql-types'
import Tags from './tags'

const WorkComponent = (props: { work: ContentfulWork }) => {
    return (
        <div className="shadow-md rounded-xl h-full">
            <div className="h-2/5">
                {props.work.thumbnail?.file?.url
                    ? <img className="object-cover rounded-2xl h-full w-full" src={props.work.thumbnail?.file?.url} />
                    : <img className="object-cover rounded-2xl h-full w-full" src="https://i.imgur.com/LEhQWtA.png" />
                }
            </div>

            <div className="h-3/5 min-h-36">
                <div className="p-2">
                    <p className="font-bold text-2xl">{props.work.title}</p>
                    <small className="text-warm-gray-500">{(new Date(props.work.date).toDateString())}</small>
                </div>

                <div className="">
                    <Tags tags={props.work.tags as string[] | undefined ?? []} />
                </div>

                <div className="p-2 overflow-hidden">
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: props.work.description?.childMarkdownRemark?.html ?? '' }} />
                </div>
            </div>
        </div>
    )
}

export default WorkComponent