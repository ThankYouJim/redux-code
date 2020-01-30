import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				Notice
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author={faker.internet.userName()}
					timeAgo="Today at 4.20pm"
					text="lmao"
					/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Admin"
					timeAgo="Yesterday at 9:00am"
					text="hh"
					/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Guest"
					timeAgo="Today at 8:03pm"
					text="order corn"
					/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
