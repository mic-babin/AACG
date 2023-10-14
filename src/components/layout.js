import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return <main>{children}</main>
}

export default Layout
