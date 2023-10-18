const Gallery = () => {
    // Sample image URLs. Replace with your own image URLs or import from assets.
    const images = [
        'https://i.ibb.co/gJyrhyQ/pexels-jan-kop-iva-3349460.jpg',
        'https://i.ibb.co/vXcF4sY/pexels-fatih-turan-18482935.jpg',
        'https://i.ibb.co/68D7ZWG/pexels-auto-records-10550012.jpg',
        'https://i.ibb.co/F5KdGjD/jonathan-cooper-lih-Uu1k-Abk-Q-unsplash.jpg',
        'https://i.ibb.co/bzf5Gcy/valdemars-magone-f-JQFty-VQY2g-unsplash.jpg',
        'https://i.ibb.co/yBk9Dc9/kevin-bhagat-3c-Lpiv8h5so-unsplash.jpg',
        'https://i.ibb.co/gJyrhyQ/pexels-jan-kop-iva-3349460.jpg',
        'https://i.ibb.co/vXcF4sY/pexels-fatih-turan-18482935.jpg',
        'https://i.ibb.co/68D7ZWG/pexels-auto-records-10550012.jpg',
        'https://i.ibb.co/F5KdGjD/jonathan-cooper-lih-Uu1k-Abk-Q-unsplash.jpg',
        'https://i.ibb.co/bzf5Gcy/valdemars-magone-f-JQFty-VQY2g-unsplash.jpg',
        'https://i.ibb.co/yBk9Dc9/kevin-bhagat-3c-Lpiv8h5so-unsplash.jpg',
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">Cars Palace Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                        <img src={image} alt={`Car ${idx}`} className="w-full h-48 sm:h-64 object-cover"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
