import { useLoaderData } from "react-router-dom";


const Car = () => {
    const data = useLoaderData();
    const { rating, brand, model, year, type, photo, price, details } = data
    return (
        <div className="space-y-4">
            <h1 className="text-center font-semibold text-4xl">Details of {brand} {model} {year}</h1>
            <img src={photo} alt="" className="mx-auto" />
            <p className="text-2xl font-bold text-red-600 text-center p-4">Type: {type}</p>
            <p className="text-2xl font-bold text-red-600 text-center p-4">Price: ${price}</p>
            <div className="rating rating-sm flex justify-center items-center gap-1">
                Rating: {rating}<input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/> 
            </div>
            <p className="text-justify p-4">{details}</p>
            <div className="flex flex-col">
                <button className="border border-blue-600 p-2 m-2 font-semibold text-blue-600">Buy Now</button>
                <button className="border border-green-600 p-2 m-2 font-semibold text-green-600">Update</button>
                <button className="border border-red-600 p-2 m-2 font-semibold text-red-600">Delete</button>
            </div>
        </div>
    );
};

export default Car;