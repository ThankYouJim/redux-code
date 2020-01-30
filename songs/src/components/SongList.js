import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// We can just use 'Component' since we imported it up there
class SongList extends Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui divided list">{this.renderList()}</div>
		);
	};
}

const mapStateToProps = state => {
	console.log(state);
	// returns an object
	return { songs: state.songs };
}

/* function connect() {
 * 	return function() { return 'foo'; }
 * }
 * calling connect() returns the function (which shows nothing on console)
 * calling connect()() returns 'foo' 
 */
export default connect(mapStateToProps, { selectSong })(SongList);