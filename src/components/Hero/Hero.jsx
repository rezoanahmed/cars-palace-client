

const Hero = () => {
    return (
        <div>
            <div className="hero h-[75vh]" style={{ backgroundImage: 'url(https://i.ibb.co/bzf5Gcy/valdemars-magone-f-JQFty-VQY2g-unsplash.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="p-2 rounded-md ease-linear duration-300 text-blue-600 hover:text-white hover:bg-blue-600 outline hover:outline-blue-600">Pre-Order Today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;