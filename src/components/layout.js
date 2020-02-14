

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header" //correct
import "./layout.css" //correct
// import "../"


const Layout = ({ children }) => {
  const data = {
    site: {
      siteMetadata: {
        title: "Youtube Watch Party"
      }
    }
  }

  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          backgroundColor: "#282c34"
        }}
      >
        <main >{children}</main>
        <footer>
          © {new Date().getFullYear()}, GianFranco
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
