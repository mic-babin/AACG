import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { ParallaxProvider } from "react-scroll-parallax"
import ContactInfo from "../components/contact/contact-info/contact-info.component"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const contactData = data.allWpPost.edges[0].node
  const title = contactData.title.split("<br>")
  const content = contactData.content.split("<p>")

  return (
    <Layout location={location} title={siteTitle}>
      <ParallaxProvider>
        <Seo title="Agence Artistique Corinne Giguère - Contact" />
        <ContactInfo title={title} content={content} />
      </ParallaxProvider>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "contact" } } } }
      }
    ) {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
