import React, {PropTypes} from 'react'

class Split extends React.Component {
  render() {
    return (
      <div className="split-outer">
        <div className={"split-inner split-" + this.props.direction}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Split;
