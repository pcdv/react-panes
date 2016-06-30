import React, {PropTypes} from 'react'
import Split from './Split.jsx'
import Center from './Center.jsx'
import Pane from './Pane.jsx'
import PaneContainer from './PaneContainer.jsx'
import Frame from './Frame.jsx'
import {getActiveView} from './util.js'

function toggle(views, view) {
  var active = !view.active
  for (var i in views) {
    var v = views[i]
    if (v.position === view.position)
      v.active = false
  }
  view.active = active
}

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

  onLayoutChange(e) {
    switch (e.action) {
      case 'TOGGLE':
        toggle(this.state.views, e.view)
        this.forceUpdate()
        break
    }
  }

  getPaneFor(type) {
    var view = getActiveView(this.state.views, type)
    if (view) {
      return view.component
    }
    return null
  }

  render() {
    const views = this.state.views

    return (
      <Frame views={views} onChange={e => this.onLayoutChange(e) }>
        <Split direction="vertical">
          {this.getPaneFor("top") }
          <Split direction="horizontal">
            {this.getPaneFor("left") }
            <div className="center-pane">{views.center.component.props.children}</div>
            {this.getPaneFor("right") }
          </Split>
          {this.getPaneFor("bottom") }
        </Split>
      </Frame>
    )
  }
}

export default Layout
