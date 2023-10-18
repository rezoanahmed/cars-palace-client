import { useLoaderData } from "react-router-dom";
import Cars from "../../components/Cars/Cars";


const BrandDetails = () => {
    const data = useLoaderData()
    return (
        <div>
            <div>
                <h1 className="text-center text-2xl font-semibold">{data.length>0?`${data.length} Latest Cars Are Available`:"No cars available"}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data?.map(element=><Cars key={element._id} cars={element}></Cars>)}
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;