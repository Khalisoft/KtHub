import "./../styles/gallery.css";
import imageFile from "./../assets/images/gallery/IMGI4G.jpg";
const Gallery = () => {
	const images = [
		{
			id: 1,
			src: imageFile,
		},
		{
			id: 2,
			src: imageFile,
		},
		{
			id: 3,
			src: imageFile,
		},
		{
			id: 4,
			src: imageFile,
		},
		{
			id: 5,
			src: imageFile,
		},
		{
			id: 6,
			src: imageFile,
		},
		{
			id: 7,
			src: imageFile,
		},
		{
			id: 8,
			src: imageFile,
		},
		{
			id: 9,
			src: imageFile,
		},
	];
	return (
		<div className="gallery">
			{images.map((image) => {
				return (
					<div className="image-container">
						<img className="image" src={image.src} alt="" key={image.id} />
					</div>
				);
			})}
		</div>
	);
};

export default Gallery;
