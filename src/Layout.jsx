import React, {PropTypes} from 'react'
import Split from './Split.jsx'
import Center from './Center.jsx'
import Pane from './Pane.jsx'
import PaneContainer from './PaneContainer.jsx'

const defaults = {
  top: 'left',
  bottom: 'left',
  left: 'top',
  right: 'top'
}

function container(panes, type) {
  return (
    <PaneContainer></PaneContainer>
  )
}

class Layout extends React.Component {
  render() {
    const panes = {}
    let center

    var children = React.Children.toArray(this.props.children)
    children.forEach(c => {
      if (c.type == Center)
        center = c
      else if (c.type == Pane) {
        let pos = c.props.position.split(" ")
        if (pos.length == 1)
          pos.push(defaults[pos[0]])
        if (!panes[pos[0]])
          panes[pos[0]] = {}
        if (!panes[pos[0]][pos[1]])
          panes[pos[0]][pos[1]] = []
        panes[pos[0]][pos[1]].push(c)
      } else
        throw "??"
    })
    return (
      <Split direction="vertical">
        {container(panes, "top")}
        <Split direction="horizontal">
          {container(panes, "left")}
          {center.props.children}
          {container(panes, "right")}
        </Split>
        {container(panes, "bottom")}
      </Split>
    )
  }
}

export default Layout
