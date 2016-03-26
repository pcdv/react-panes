import React, {PropTypes} from 'react'
import Bar from './Bar.jsx'

class Frame extends React.Component {
		render() {
				return (
						<div className="frame">
								<Bar type="top"/>
								<Bar type="left"/>
								<Bar type="right"/>
								<Bar type="bottom"/>
								<div className="pane-center">{this.props.children}</div>
						</div>
				)
		}
}

export default Frame
