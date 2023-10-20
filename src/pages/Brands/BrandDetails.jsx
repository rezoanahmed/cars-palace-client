import { useLoaderData, useParams } from "react-router-dom";
import Cars from "../../components/Cars/Cars";
import Slider from "../../components/Slider/Slider";
import { useEffect, useState } from "react";


const BrandDetails = () => {


    const data = useLoaderData()
    const params = useParams();
    const brandName = params.name;
    // console.log(brandName);
    const [brand, setBrand] = useState([]);
    useEffect(()=>{
        fetch(`https://cars-palace-ey5l3cjwy-rezoans-projects.vercel.app/brands/${brandName}`)
        .then(res=>res.json())
        .then(data=>setBrand(data))
    },[])
    // console.log(brand.name);

    return (
        <div>
            <div>
                <Slider></Slider>

                <div className="p-4 flex flex-col md:flex-row gap-5 justify-center items-center">
                    <div>
                        <img src={brand.photo} alt="" className="" />
                    </div>
                    <div className="p-4 space-y-2">
                        <h1 className="font-semibold text-4xl">{brand.name}</h1>
                        <p className="text-sm text-gray-600">{brand.description}</p>
                    </div>
                </div>

                <h1 className="text-center text-2xl font-semibold">{data.length>0?`${data.length} Latest Cars Are Available`:"No cars available"}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
                    {data?.map(element=><Cars key={element._id} cars={element}></Cars>)}
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;