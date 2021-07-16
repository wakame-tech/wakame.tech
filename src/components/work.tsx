import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ContentfulWork } from '../../types/graphql-types'
import Tags from './tags'

const WorkComponent = (props: { work: ContentfulWork }) => {
    return (
        <div className="bg-white shadow-md rounded-xl h-full">
            <div className="h-2/5">
                {props.work.thumbnail
                    ? (<GatsbyImage
                        className="object-cover rounded-2xl h-full w-full"
                        image={getImage(props.work.thumbnail.gatsbyImageData)!}
                        alt=""
                    />)
                    : (<StaticImage
                        className="object-cover rounded-2xl h-full w-full"
                        src='https://i.imgur.com/LEhQWtA.png'
                        alt=""
                    />)}
            </div>

            <div className="h-3/5 min-h-36">
                <div className="p-2">
                    <p className="text-warm-gray-700 text-xl">{props.work.title}</p>
                    <small className="text-gray-400">{props.work.date}</small>
                </div>

                <div className="pl-2">
                    <Tags tags={props.work.tags as string[] | undefined ?? []} />
                </div>

                <div className="p-2 overflow-hidden">
                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: props.work.description?.childMarkdownRemark?.html ?? '' }}>
                        {/* {props.work.description?.childMarkdownRemark?.rawMarkdownBody} */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkComponent