import { Box } from '@material-ui/core';
import Footer from 'components/Footer/pc';
import Header from 'components/Header/pc';
import FeedbackRequest from 'pages/Feedback/Request/pc';
import Main from 'pages/Main/pc';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component<{}, { width: number }> {
	constructor(props: any) {
		super(props);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.state = { width: 1000 };
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth });
	}

	render() {
		return (
			<Box>
				<Header />
				<Switch>
					<Route exact path="/feedback/request" component={FeedbackRequest} />
					<Route exact path="/" component={Main} />
				</Switch>
				<Footer />
			</Box>
		);
	}
}

export default App;
