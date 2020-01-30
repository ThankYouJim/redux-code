import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './component/ImageList';

class App extends React.Component {
	state = {
		images: []
	};

	// Method 1: Promise
	// onSearchSubmit(term) {
	// 	axios.get('https://api.unsplash.com/search/photos', {
	// 		params: {
	// 			query: term
	// 		},
	// 		headers: {
	// 			Authorization: 'Client-ID 030338d4079bf8a052eee85832df602071a6aaba1520e197d85267b89c187bb5'
	// 		}
	// 	}).then((response) => {
	// 		console.log(response.data.results);
	// 	});

	// Method 2: Asynchronous
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
		params: {
			query: term
		}
	});

	// this will not work becuase 'this' is referring to Searchbar from few lines down
	this.setState({ images: response.data.results });
}

	render() {
		return (
			<div className="ui container" style = {{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images= {this.state.images}/>
			</div>
		);
	}
}

export default App;