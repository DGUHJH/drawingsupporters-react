import { Box } from '@material-ui/core';
import Footer from 'components/Footer/pc';
import Header from 'components/Header/pc';
import FeedbackDetails from 'pages/Feedback/Details/pc';
import FeedbackList from 'pages/Feedback/List/pc';
import FeedbackRequest from 'pages/Feedback/Request/pc';
import Main from 'pages/Main/pc';
import UserJoin from 'pages/User/Join/pc';
import UserLogin from 'pages/User/Login/pc';
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
					<Route exact path="/user/login" component={UserLogin} />
					<Route exact path="/user/join" component={UserJoin} />
					<Route exact path="/feedback/request" component={FeedbackRequest} />
					<Route exact path="/feedback/list" component={FeedbackList} />
					<Route
						exact
						path="/feedback/details/:id"
						component={FeedbackDetails}
					/>
					<Route exact path="/" component={Main} />
				</Switch>
				<Footer />
			</Box>
		);
	}
}

export default App;
