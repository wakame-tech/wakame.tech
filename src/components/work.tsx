import React from 'react'
import { ContentfulWork } from '../../types/graphql-types'
import Tags from './tags'

const WorkComponent = (props: { work: ContentfulWork }) => {
    return (
        <div className="shadow-md rounded-xl h-full">
            <div className="h-1/2">
                {props.work.thumbnail?.file?.url
                    ? <img className="object-cover rounded-2xl h-full w-full" src={props.work.thumbnail?.file?.url} />
                    : null}
            </div>

            <div className="h-1/2 min-h-36">
                <div className="p-2">
                    <p className="font-bold text-2xl">{props.work.title}</p>
                    <small className="text-warm-gray-500">{(new Date(props.work.date).toDateString())}</small>
                </div>

                <div className="">
                    <Tags tags={props.work.tags as string[] | undefined ?? []} />
                </div>

                <div className="p-2">
                    <p className="text-gray-600">{props.work.description?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkComponent