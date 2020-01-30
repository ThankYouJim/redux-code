import axios from 'axios';

// creates a axios client
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 030338d4079bf8a052eee85832df602071a6aaba1520e197d85267b89c187bb5'
	}
})