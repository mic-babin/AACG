import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./navigation/footer/footer.component"
import Header from "./navigation/header/header.component"
// normalize CSS across browsers
import "../css/normalize.css"

// custom CSS styles
import "../assets/styles/style.css"

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
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
