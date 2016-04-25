import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/Layout.jsx'
import Pane from './src/Pane.jsx'
import Center from './src/Center.jsx'

export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Pane position="left" title="Left1">
          LEFT1 LEFT1 LEFT1 LEFT1
        </Pane>
        <Pane position="left" title="Left2">
          LEFT2 LEFT2 LEFT2 LEFT2
        </Pane>
        <Pane position="right" title="right1">
          right1 right1 right1 right1
        </Pane>
        <Pane position="right" title="right2">
          right2 right2 right2 right2
        </Pane>
        <Pane position="top" title="top1">
          top1 top1 top1 top1
        </Pane>
        <Pane position="top" title="top2">
          top2 top2 top2 top2
        </Pane>
        <Center>
          CENTER CENTER CENTER
        </Center>
      </Layout>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#myApp"));
