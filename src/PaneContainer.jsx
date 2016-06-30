import React, { PropTypes } from 'react'

/**
 * A component that is next to a bar (top, bottom, left or right) and renders
 * one or two active panes (eg. left-top + left-bottom or top-left + top-right)
 * with a splitter while hiding eventual inactive others from the same "side".
 */
class PaneContainer extends React.Component {
  render() {
    var cls = "pane-container " + this.props.type
    return (
      <div className={cls}>
        {this.props.children}
      </div>
    )
  }
}

export default PaneContainer;
