import React, { PropTypes } from 'react'
import classNames from 'classnames'

class Button extends React.Component {
  render () {
    const cls = classNames('bar-button', {
      active: this.props.view.active
    })
    return (
      <span className="bar-button">{this.props.view.title}</span>
    )
  }
}

export default Button;
