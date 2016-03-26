import React, { PropTypes } from 'react'
import Frame from './Frame.jsx'
import Layout from './Layout.jsx'

/**
 * The "page" contains the full layout with an optionally visible frame
 * containing the lateral bars.
 */
class Page extends React.Component {
  render () {
    return (
      <Frame>
        <Layout>{this.props.children}</Layout>
      </Frame>
    )
  }
}

export default Page
