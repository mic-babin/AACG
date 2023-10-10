import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeHero from "../components/home/hero/hero.component"
import About from "../components/home/about/about.component"
import Pictures from "../components/home/pictures/pictures.component"
import Team from "../components/home/team/team.component"
import Instagram from "../components/home/instagram/instagram.component"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const homeDataArr = data.allWpPost.nodes[0].content.split("<p>")
  const media = data.allWpMediaItem.nodes
  const missionTitle = homeDataArr
    .filter(element => element.includes("#missionTitre"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const missionSubtitle = homeDataArr
    .filter(element => element.includes("#missionSousTitre"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const missionText1 = homeDataArr
    .filter(element => element.includes("#missionTexte1"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const missionText2 = homeDataArr
    .filter(element => element.includes("#missionTexte2"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const missionText3 = homeDataArr
    .filter(element => element.includes("#missionTexte3"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const missionText4 = homeDataArr
    .filter(element => element.includes("#missionTexte4"))[0]
    .split("=")[1]
    .split("</p>")[0]

  const title = homeDataArr
    .filter(element => element.includes("#titre"))[0]
    .split("=")[1]
    .split("</p>")[0]

  const employeeTitle = homeDataArr
    .filter(element => element.includes("#equipeTitre"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const employeeText = homeDataArr
    .filter(element => element.includes("#equipeTexte"))[0]
    .split("=")[1]
    .split("</p>")[0]
  // const  media,
  const telephone = homeDataArr
    .filter(element => element.includes("#telephone"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const email = homeDataArr
    .filter(element => element.includes("#email"))[0]
    .split("=")[1]
    .split("</p>")[0]

  const followTitle = homeDataArr
    .filter(element => element.includes("#suivreTitre"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const followText = homeDataArr
    .filter(element => element.includes("#suivreTexte"))[0]
    .split("=")[1]
    .split("</p>")[0]

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Agence Artistique Corinne Giguère" />
      <HomeHero title={title} media={media} />
      <About
        missionTitle={missionTitle}
        missionSubtitle={missionSubtitle}
        missionText1={missionText1}
        missionText2={missionText2}
        missionText3={missionText3}
        missionText4={missionText4}
      />
      <Pictures />
      <Team
        employeeTitle={employeeTitle}
        employeeText={employeeText}
        telephone={telephone}
        email={email}
      />
      <Instagram followTitle={followTitle} followText={followText} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { in: "home" } } } } }
    ) {
      nodes {
        slug
        content
      }
    }
    allWpMediaItem(filter: { title: { regex: "/^hero.*$/" } }) {
      nodes {
        description
        title
        caption
        gatsbyImage(width: 1000, placeholder: BLURRED)
      }
    }
  }
`
