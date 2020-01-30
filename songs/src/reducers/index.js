//REDUCER
import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{ title: 'Taro', duration: '2:58' },
		{ title: 'Garden of Mary Jane', duration: '4:20' },
		{ title: 'Cheesy Sheezy', duration: '3:03' },
	]
};

const selectedSongReducer = (selectedSong=null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	
	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
})