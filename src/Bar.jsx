import React, {PropTypes} from 'react'
import Button from './BarButton.jsx'

class Bar extends React.Component {
  render() {
    // display something
    return (
      <div className={"bar bar-" + this.props.type}>
        {this.props.views.map(v => <Button view={v} key={v.title}/>)}
      </div>
    )
  }
}

export default Bar;
