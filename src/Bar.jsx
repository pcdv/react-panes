import React, { PropTypes } from 'react'

class Bar extends React.Component {
  render () {
    // display something
    return (
      <div>Bar "{this.props.type}"</div>
    )
  }
}

export default Bar;
