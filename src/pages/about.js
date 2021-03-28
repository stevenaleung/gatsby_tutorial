import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
    return (
        <Layout>
            <Header headerText="About Gatsby" />
            <Header headerText="It's pretty cool" />
            <p>Such wow. Very React.</p>
            <h1>About me</h1>
            <p>
                I’m good enough, I’m smart enough, and gosh darn it, people like me!
            </p>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                We're the only site running on your computer dedicated to showing the
                best photos and videos of pandas eating lots of food.
            </p>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`