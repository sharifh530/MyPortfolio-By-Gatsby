import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"
import FlickrHero from "react-flickr-hero"
import HeroText from "../components/HeroText"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <FlickrHero
        api_key="1b4e5b0203fab0d5731afe68f0a543e1"
        user_id="132343752@N06"
        album_id="72157694825254121"
        fillPage
      />
      <HeroText />
      <Intro />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
