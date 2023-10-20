const Gallery = () => {
    // Sample image URLs. Replace with your own image URLs or import from assets.
    const images = [
        "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7813163/pexels-photo-7813163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10550012/pexels-photo-10550012.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/274974/pexels-photo-274974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/17507731/pexels-photo-17507731/free-photo-of-white-toyota-86-parked-near-abandoned-warehouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3972750/pexels-photo-3972750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/8980830/pexels-photo-8980830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    return (
        <div className="p-6 min-h-screen">
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
