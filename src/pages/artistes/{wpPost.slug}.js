import React from "react"
import { graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"
import Layout from "../../components/layout"
import Bio from "../../components/artiste/bio/bio.component"
import Seo from "../../components/seo"
import Photo from "../../components/artiste/photo/photo.component"
import Video from "../../components/artiste/video/video.component"
import Audio from "../../components/artiste/audio/audio.componennt"

const Artiste = ({ data }) => {
  const title = data.wpPost.title
  const content = data.wpPost.content.split("\n\n\n\n")
  const slug = data.wpPost.slug
  const tags = data.wpPost.tags.nodes.map(tag => tag.name)

  const bioImageArr = data.allWpMediaItem.nodes.filter(item =>
    item.title.includes("featured")
  )
  const photoArr = data.allWpMediaItem.nodes.filter(item =>
    item.title.includes("photo")
  )
  const audioArr = data.allWpMediaItem.nodes.filter(item =>
    item.title.includes("audio")
  )

  const videoArr = content.filter(item => item.includes("#video"))
  console.log(content.filter(item => item.includes("#bio")))
  if (content.filter(item => item.includes("#bio")).lenght == 0) return ""
  return (
    <Layout location={""} title={title}>
      <ParallaxProvider>
        <Bio
          content={content}
          title={title}
          slug={slug}
          tags={tags}
          bioImageArr={bioImageArr}
        />
        <div className="p-header pb-3">
          <Audio audioArr={audioArr} />
          <Video videoArr={videoArr} />
          <Photo photoArr={photoArr} />
        </div>
        <Seo title={title} />
      </ParallaxProvider>
    </Layout>
  )
}

export default Artiste

export const pageQuery = graphql`
  query GetSArtist($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      slug
      tags {
        nodes {
          name
        }
      }
    }
    allWpMediaItem(filter: { title: { regex: "/^emmanuelle.*$/" } }) {
      nodes {
        id
        description
        title
        caption
        gatsbyImage(width: 1000, placeholder: BLURRED)
        mediaItemUrl
      }
    }
  }
`
