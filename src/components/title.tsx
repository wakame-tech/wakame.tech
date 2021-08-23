import React from 'react'

type TitleProps = {
  title: string
}

const Title = (props: TitleProps) => {
    return (
      <div className="text-center">
        <h1 className="text-gray-600 text-4xl font-bold">{props.title}</h1>
      </div>
    )
}

export default Title