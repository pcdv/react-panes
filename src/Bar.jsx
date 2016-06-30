import React, {PropTypes} from 'react'
import BarButton from './BarButton.jsx'

class Bar extends React.Component {
  render() {
    return (
      <div className={"bar bar-" + this.props.type}>
        {this.props.views.map(v => <BarButton view={v} key={v.title} onClick={e => {
          this.props.onChange({
            action: 'TOGGLE',
            view: v
          })
        } }/>) }
      </div>
    )
  }
}

export default Bar;
