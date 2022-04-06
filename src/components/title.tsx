import React from "react"

type TitleProps = {
  title: string
}

const Title = (props: TitleProps) => {
  return (
    <div className="">
      <h1 className="text-primary-content text-xl font-bold">{props.title}</h1>
    </div>
  )
}

export default Title
