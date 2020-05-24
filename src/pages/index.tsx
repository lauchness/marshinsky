import React from "react"

import Layout from "../components/layout"
import GuaranteeIcon from "../components/guaranteeIcon"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Marshinsky's" />
    <div style={{
      display:`flex`,
      flexDirection: `column`,
      justifyContent: `center`
    }}>
      <h2>Pets or whatever</h2>
      <GuaranteeIcon />
    </div>
  </Layout>
)

export default IndexPage
