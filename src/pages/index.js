import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lesson from "../components/lesson/Lesson"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Lesson />
  </Layout>
)

export default IndexPage
