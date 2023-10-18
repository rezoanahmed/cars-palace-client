import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Brands = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1 className="p-4 text-4xl font-semibold text-center">We have the most famous brands cars all over the world!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5">
            {data?.map(element=><Brand key={element._id} brand={element}></Brand>)}
            </div>
        </div>
    );
};

export default Brands;