import React from 'react'
import { Link } from 'gatsby'
// import { AuthorPageContext } from '../../gatsby-node'

type Props = {
    pageContext: any // AuthorPageContext
}

const Component = ({ pageContext }: Props) => (
    <div>
        <h1>Author name is {pageContext.author.name}</h1>
        <ul>
            <li><Link to="/authors/">Back to authors</Link></li>
            <li><Link to="/">Back to top</Link></li>
        </ul>
    </div>
)

export default Component