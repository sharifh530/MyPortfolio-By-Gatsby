import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {
  return (
    <Layout>
      <Intro />
      <Services />
      <Jobs />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
