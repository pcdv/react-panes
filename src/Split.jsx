import React, { PropTypes } from 'react'

class Split extends React.Component {
  render () {
    return (
      <div>Split "{this.props.direction}"
        {this.props.children}
      </div>
    )
  }
}

export default Split;
