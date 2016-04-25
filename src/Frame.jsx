import React, {PropTypes} from 'react'
import Bar from './Bar.jsx'


class Frame extends React.Component {

  filterViews(type) {
    const res = []
    for (var title in this.props.views) {
      const v = this.props.views[title]
      if (v.position.startsWith(type))
        res.push(v)
    }
    return res
  }

  render() {
    return (
      <div className="frame">
        <Bar type="top" views={this.filterViews("top")}/>
        <div className="middle">
          <Bar type="left" views={this.filterViews("left")}/>
          <div className="frame-contents">{this.props.children}</div>
          <Bar type="right" views={this.filterViews("right")}/>
        </div>
        <Bar type="bottom" views={this.filterViews("bottom")}/>
      </div>
    )
  }
}

export default Frame
