import React, {PropTypes} from 'react'
import Bar from './Bar.jsx'
import {filterViews} from './util.js'

class Frame extends React.Component {

  render() {
    var props = { onChange: this.props.onChange }
    var views = this.props.views
    return (
      <div className="frame">
        <Bar type="top" views={filterViews(views, "top") } {...props}/>
        <div className="middle">
          <Bar type="left" views={filterViews(views, "left") } {...props}/>
          <div className="frame-contents">{this.props.children}</div>
          <Bar type="right" views={filterViews(views, "right") } {...props}/>
        </div>
        <Bar type="bottom" views={filterViews(views, "bottom") } {...props}/>
      </div>
    )
  }
}

export default Frame
