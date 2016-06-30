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
      .filter(c => c !== null)
      .map(c => {
        return { component: c, size: "10%" }
      })

    // make middle component main one. FIXME
    if (children.length > 1)
      delete children[1].size
    else if (children.length === 1)
      delete children[0].size

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
        {this.state.children.map(c => {
          if (c.component)
            return <SplitWrapper key={"c"+i++} direction={this.props.direction} size={c.size}>{c.component}</SplitWrapper>
          else
            return c
        }) }
      </div>
    )
  }
}

export default Split;
