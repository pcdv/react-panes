import React, {PropTypes} from 'react'
import Split from './Split.jsx'
import Center from './Center.jsx'
import Pane from './Pane.jsx'
import PaneContainer from './PaneContainer.jsx'
import Frame from './Frame.jsx'

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state = this.computeState(props)
  }

  /**
   * Store nested views in state, as well as the position and state (active,
   * size, etc) of nested views.
   */
  computeState(props) {
    var state = {
      views: {}
    }
    var prevViews = this.state.views || {}
    var children = React.Children.toArray(this.props.children)
    children.forEach(c => {
      if (c.type == Center)
        state.views.center = {
          component: c,
          position: "center"
        }
      else if (c.type == Pane) {
        var prev = prevViews[c.props.title] || {}

        state.views[c.props.title] = Object.assign({
          position: c.props.position
        }, prev, {
          component: c,
          title: c.props.title
        })
      }
    })
    return state
  }

  render() {
    const views = this.state.views

    return (
      <Frame views={views}>
        <Split direction="vertical">
          <PaneContainer type="top" views={views}></PaneContainer>
          <Split direction="horizontal">
            <PaneContainer type="left" views={views}></PaneContainer>
            {views.center.component.props.children}
            <PaneContainer type="right" views={views}></PaneContainer>
          </Split>
          <PaneContainer type="bottom" views={views}></PaneContainer>
        </Split>
      </Frame>
    )
  }
}

export default Layout
