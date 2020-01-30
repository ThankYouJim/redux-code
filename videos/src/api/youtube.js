import axios from 'axios';

// this key is safe to share to public
const KEY = 'AIzaSyCxQM_ol2WjexWPqMT7Hdm0P0s2xEWVxK0';

// end url will be like:
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyCxQM_ol2WjexWPqMT7Hdm0P0s2xEWVxK0&q=cats
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
		// q not used until gotten from input
	}
});