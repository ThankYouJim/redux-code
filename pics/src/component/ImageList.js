import React from 'react';
import  ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
	// v1
	// const images = props.images.map(image => {
	// 	return <img
	// 		alt={image.description}
	// 		key={image.id}
	// 		src={image.urls.small} />;
	// });

	// PS. when necessary, put the key attr in the outer most tag. \
	// eg. return <div key...><img... ... </div>

	// v2: stripped 'images' to only get desc. id urls
	// const images = props.images.map(({ description, id, urls}) => {
	// 	return <img alt={description} key={id} src={urls.regular} />;

	// v3
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />
	});

	return <div className="image-list">{images}</div>;
};

export default ImageList;