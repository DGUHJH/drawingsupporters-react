import { Box } from '@material-ui/core';
import Footer from 'components/Footer/pc';
import Header from 'components/Header/pc';
import Feedback from 'pages/Feedback/Feedback/pc';
import FeedbackDetails from 'pages/Feedback/FeedbackDetails/pc';
import FeedbackList from 'pages/Feedback/List/pc';
import FeedbackRequest from 'pages/Feedback/Request/pc';
import RequestDetails from 'pages/Feedback/RequestDetails/pc';
import Main from 'pages/Main/pc';
import UserJoin from 'pages/User/Join/pc';
import UserLogin from 'pages/User/Login/pc';
import MentorJoin from 'pages/User/MentorJoin/pc';
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
				{this.state.width > 1000 ? (
					<>
						<Header />
						<Switch>
							<Route exact path="/feedback/feedback/:id" component={Feedback} />
							<Route exact path="/user/login" component={UserLogin} />
							<Route exact path="/user/join" component={UserJoin} />
							<Route exact path="/user/mentor-join" component={MentorJoin} />
							<Route
								exact
								path="/feedback/request"
								component={FeedbackRequest}
							/>
							<Route exact path="/feedback/list" component={FeedbackList} />
							<Route
								exact
								path="/feedback/details/:id"
								component={FeedbackDetails}
							/>
							<Route
								exact
								path="/request/details/:id"
								component={RequestDetails}
							/>
							<Route exact path="/" component={Main} />
						</Switch>
						<Footer />
					</>
				) : (
					<Box>모바일은 지원하지 않습니다!</Box>
				)}
			</Box>
		);
	}
}

export default App;
