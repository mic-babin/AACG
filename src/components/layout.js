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

  return (
    <ParallaxProvider>
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        <header className="global-header"></header>

        <main>{children}</main>
      </div>
    </ParallaxProvider>
  )
}

export default Layout
