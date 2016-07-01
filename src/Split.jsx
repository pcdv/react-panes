import React, {PropTypes} from 'react'

class SplitWrapper extends React.Component {
  render() {
    if (this.props.size === undefined) {
      return this.props.children
    }
    var styles
    if (this.props.direction === 'horizontal')
      styles = { width: this.props.size, height: "100%" }
    else
      styles = { height: this.props.size, width: "100%" }
    return <div className="split-wrapper" style={styles}>{this.props.children}</div>
  }
}

/**
 * Wraps the child that must take all the available space.
 */
export class Fill extends React.Component {
  render() {
    return <div style={{ flex: "1 0 auto"}}>{this.props.children}</div>
  }
}

class Split extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.computeState(props)
  }

  componentWillReceiveProps(props) {
    this.setState(this.computeState(props))
  }

  computeState(props) {
    // wrap component with state (size)
    var children = React.Children.toArray(props.children)
    var key = 0
    children = children
      .filter(c => c)
      .map(c => {
        // hack because bug in chrome when nesting in <div> lose 100% height
        if (c.type === Fill)
          return React.Children.toArray(c.props.children)[0]
        else
          return <SplitWrapper key={"sw" + key++} direction={props.direction} size={"10%"}>{c}</SplitWrapper>
      })

    // insert splitters
    for (var i = children.length - 1; i > 0; i--) { 
      children.splice(i, 0, <div className="split-handle" key={i}></div>)
    }
    return { children }
  }

  render() {
    var i = 0
    return (
      <div className={"split-inner split-" + this.props.direction}>
        {this.state.children}
      </div>
    )
  }
}

export default Split;
