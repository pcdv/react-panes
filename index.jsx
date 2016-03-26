import React from 'react';
import ReactDOM from 'react-dom';
import Page from './src/Page.jsx'
import Pane from './src/Pane.jsx'
import Center from './src/Center.jsx'

export class App extends React.Component {
		render() {
				return (
						<Page>
								<Pane position="left" title="Left">
										Left pane
								</Pane>
								<Center>
										Center pane
								</Center>
						</Page>
				)
		}
}

ReactDOM.render(
		<App/>, document.querySelector("#myApp"));
