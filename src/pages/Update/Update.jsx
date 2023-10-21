import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const {_id, brand, model, year, type, price, rating, photo, details} = data;
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const model = form.model.value;
        const year = form.year.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const details = form.details.value;

        const car = {brand, model, year, type, price, rating, photo, details};
        // console.log(car);

        fetch(`https://cars-palace-qlg3l0r23-rezoans-projects.vercel.app/car/${_id}`,{
            method: "PATCH",
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(car),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                Swal.fire("Great!!!", "Car Details Has Been Updated Successfully", "success");
                navigate(`/car/${_id}`)
            }
        })
    }
    return (
        <div className="p-4">
            <h1 className="text-center text-3xl">Add New Exciting Cars!!!</h1>
            <div className="flex justify-center">
                <form onSubmit={handleUpdate} className="flex gap-2 flex-col justify-center mt-10">
                    {/* brand and model */}
                    <div className="flex gap-2">
                        {/* <input name='brand' type="text" placeholder="Brand" className="input input-bordered input-info border-blue-600 w-full max-w-xs" /> */}
                        <select defaultValue={brand} name='brand' className="select select-bordered border-blue-600 w-full ">
                            <option disabled selected>Select Brand</option>
                            <option>Toyota</option>
                            <option>Lexus</option>
                            <option>Audi</option>
                            <option>BMW</option>
                            <option>Mercedes</option>
                            <option>Ford</option>
                        </select>
                        <input defaultValue={model} name='model' type="text" placeholder="Model" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    </div>
                    {/* Type and Model Year */}
                    <div className="flex gap-2">
                        {/* <input type="text" placeholder="Type" className="input input-bordered input-info border-blue-600 w-full max-w-xs" /> */}
                        <select defaultValue={type} name='type' className="select select-bordered border-blue-600 w-full ">
                            <option disabled selected>Select Type</option>
                            <option>Sedan</option>
                            <option>Hatchback</option>
                            <option>SUV</option>
                            <option>Sports</option>
                            <option>Coupe</option>
                            <option>Convertible</option>
                            <option>Electric</option>
                            <option>MPV</option>
                            <option>Others</option>
                        </select>
                        <input defaultValue={year} name='year' type="text" placeholder="Model Year" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                        
                    </div>
                    {/* Price and Rating */}
                    <div  className="flex gap-2">
                        <input defaultValue={price} name='price' type="text" placeholder="Price" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                        <input defaultValue={rating} name='rating' type="text" placeholder="Rating" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    </div>
                    {/* photo url */}
                    <div className="flex gap-2">
                        <input defaultValue={photo} name='photo' type="text" placeholder="Photo URL" className="input input-bordered input-info border-blue-600 w-full" />
                        
                    </div>
                    {/* Description */}
                    <div className="flex gap-2">
                        <textarea defaultValue={details} name='details' type="text" placeholder="Write Short Description" className="p-4 h-24 input input-bordered input-info border-blue-600 w-full" />

                    </div>
                    <input type="submit" value="Update Car Details" className="bg-blue-600 text-white px-2 py-2 rounded-md" />

                </form>
            </div>
        </div>
    );
};

export default Update;