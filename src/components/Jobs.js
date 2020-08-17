import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs {
      nodes {
        strapiId
        company
        date
        position
        des {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  return <h2>jobs component</h2>
}

export default Jobs
