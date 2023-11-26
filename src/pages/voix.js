import { graphql } from "gatsby"
import React, { useState } from "react"
import { Section } from "../components/artitstes/artistes.styles"
import ArtistesHero from "../components/artitstes/artistes-hero/artistes-hero.component"
import { ParallaxProvider } from "react-scroll-parallax"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { sortByDescription } from "../utils/sort-by-description"
import { sortArtists } from "../utils/sort-artists"
import ArtistesGrid from "../components/artitstes/artistes-grid/artistes-grid.component"

const Voix = ({ path, data }) => {
  const [selectedTags, setSelectedTags] = useState([])
  const siteTitle = data.site.siteMetadata.title
  const location = path
  const tags = sortByDescription(data.allWpTag.edges.map(tag => tag.node))
  const artists = sortArtists(data.allWpPost.nodes)
  return (
    <Layout location={location} title={siteTitle}>
      <ParallaxProvider>
        <Seo title="Agence Artistique Corinne Giguère" />
        <Section id="wrapper">
          <ArtistesHero
            location={location}
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
          <ArtistesGrid
            artists={artists}
            location={location}
            selectedTags={selectedTags}
          />
        </Section>
      </ParallaxProvider>
    </Layout>
  )
}

export default Voix

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpTag {
      edges {
        node {
          id
          name
          description
          databaseId
        }
      }
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { in: "voix" } } } } }
    ) {
      nodes {
        id
        title
        slug
        content
        tags {
          nodes {
            id
            name
          }
        }
        featuredImage {
          node {
            gatsbyImage(height: 400)
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`
