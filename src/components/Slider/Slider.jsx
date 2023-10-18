
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                        <div className="hero-overlay bg-black bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl font-bold">Out with the old, in with the new! Get an extra $1,000 on your trade-in this month only!</h1>
                                <p className="mb-5"></p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg)' }}>
                        <div className="hero-overlay bg-black bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl font-bold">Drive with us, earn with us! Introducing our exclusive loyalty program – every mile counts.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                        <div className="hero-overlay bg-black bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl font-bold">Drive now, pay later – with 0% interest! Make your dream car a reality today.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;