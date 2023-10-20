import { Link, redirect, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Car = () => {

    

    const data = useLoaderData();
    const { _id, rating, brand, model, year, type, photo, price, details } = data


    // purchase handler
    const handlePurchase = () =>{
        
        fetch("https://cars-palace-ey5l3cjwy-rezoans-projects.vercel.app/cart",{
            method: "POST",
            headers:{
                "content-type": 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.insertedId);
            if(data.insertedId){
                Swal.fire("Congratulations!!!", "Your Purchase Has Been Done", 'success')
            }
        })

    }

    // delete handler
    const handleDelete = () =>{
        fetch(`https://cars-palace-ey5l3cjwy-rezoans-projects.vercel.app/car/${_id}`,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.deletedCount);
            if(data.deletedCount){
                Swal.fire("Great!!!", "Car Has Been Deleted", "success");
                
            }
        })
    }


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
                <button onClick={handlePurchase} className="border border-blue-600 p-2 m-2 font-semibold text-blue-600">Purchase Now</button>
                <Link to={`/update/${_id}`} className="border border-green-600 p-2 m-2 font-semibold text-green-600 text-center">Update</Link>
                {/* <button onClick={handleDelete} className="border border-red-600 p-2 m-2 font-semibold text-red-600">Delete</button> */}
            </div>
        </div>
    );
};

export default Car;