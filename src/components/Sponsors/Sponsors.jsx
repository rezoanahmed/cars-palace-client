import Marquee from "react-fast-marquee";
const Sponsors = () => {
    const sponsors = [
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/bridgestone-logo-2011-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/aeolus-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/apollo-logo-2021-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/Continental-logo-2013-present--2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/cooper-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/double-coin-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/giti-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/goodyear-logo-1968-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/jk-tyre-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/Hankook-logo-2019-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/kenda-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/linglong-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/Maxxis-logo-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/toyo-logo-2007-present-2048x1485.webp',
        'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/yokohama-logo-present-2048x1485.webp',
    ]
    return (

        <>
            <div>
                <Marquee>
                    <div className="flex gap-3">
                        <img src={sponsors[0]} alt="" className="h-36" />
                        <img src={sponsors[2]} alt="" className="h-36" />
                        <img src={sponsors[3]} alt="" className="h-36" />
                        <img src={sponsors[4]} alt="" className="h-36" />
                        <img src={sponsors[5]} alt="" className="h-36" />
                        <img src={sponsors[6]} alt="" className="h-36" />
                        <img src={sponsors[7]} alt="" className="h-36" />
                        <img src={sponsors[8]} alt="" className="h-36" />
                        <img src={sponsors[9]} alt="" className="h-36" />
                        <img src={sponsors[10]} alt="" className="h-36" />
                        <img src={sponsors[11]} alt="" className="h-36" />
                        <img src={sponsors[12]} alt="" className="h-36" />
                        <img src={sponsors[13]} alt="" className="h-36" />
                        <img src={sponsors[14]} alt="" className="h-36" />
                        <img src={sponsors[15]} alt="" className="h-36" />
                    </div>
                </Marquee>
            </div>
        </>
    );
};

export default Sponsors;