import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { ContentfulWork } from "../../types/graphql-types"
import Tags from "./tags"

const WorkComponent = (props: { work: ContentfulWork }) => {
  return (
    <div className="bg-white shadow-md h-full">
      <div className="h-2/5">
        {props.work.thumbnail ? (
          <GatsbyImage
            className="object-cover h-full w-full"
            image={getImage(props.work.thumbnail.gatsbyImageData)!}
            alt=""
          />
        ) : (
          <StaticImage
            className="object-cover h-full w-full"
            src="https://i.imgur.com/LEhQWtA.png"
            alt=""
          />
        )}
      </div>

      <div className="p-2 h-3/5 min-h-36">
        <div className="">
          {props.work.url ? (
            <p>
              <a href={props.work.url} className="text-warm-gray-700 text-xl">
                {props.work.title}
              </a>
            </p>
          ) : (
            <p className="text-warm-gray-700 text-xl">{props.work.title}</p>
          )}
          <small className="text-gray-400">{props.work.date}</small>
        </div>

        <div className="">
          <Tags tags={(props.work.tags as string[] | undefined) ?? []} />
        </div>

        <div className="pt-2">
          <p
            className="text-gray-600 text-sm overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: props.work.description?.childMarkdownRemark?.html ?? "",
            }}
          >
            {/* {props.work.description?.childMarkdownRemark?.rawMarkdownBody} */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkComponent
