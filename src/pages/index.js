import { Link } from "gatsby"

import styled from "@emotion/styled"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Button = styled.button`
  padding: 4px 16px;
  margin: 8px;
  color: black;
  background-color: lightgreen;
  border-radius: 8px;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div
      css={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button>hoge</Button>
      <Button
        css={css`
          color: red;
          font-weight: bold;
        `}
      >
        piyo
      </Button>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
)

export default IndexPage
