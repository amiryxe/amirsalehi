import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const ContactPage = () => {
  return (
    <Layout pageTitle="تماس با من">
      <p>this is my تماس page</p>
    </Layout>
  )
}

export const Head = ({ data }: any) => <Seo title="تماس با من" />

// export const query = graphql`
//   query {
//     allContact {
//       nodes {
//         name
//         id
//       }
//     }
//   }
// `

export default ContactPage
