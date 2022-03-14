import React from "react"

type TitleProps = {
  title: string
}

const Title = (props: TitleProps) => {
  return (
    <div className="">
      <h1 className="text-gray-800 dark:text-white text-xl font-bold">
        {props.title}
      </h1>
    </div>
  )
}

export default Title
