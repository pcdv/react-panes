import React, { PropTypes } from 'react'
import classNames from 'classnames'

class BarButton extends React.Component {
  render () {
    const cls = classNames('bar-button', {
      active: this.props.view.active
    })
    return (
      <span className={cls} onClick={this.props.onClick}>{this.props.view.title}</span>
    )
  }
}

export default BarButton;
