import React, { PropTypes } from 'react'

class Pane extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default Pane;
