


const Preorder = () => {
    
    return (
        <div className="p-4 mb-20">
            <h1 className="text-center text-3xl font-semibold">Pre-Order Exciting Cars From Us!!!</h1>
            <div className="flex justify-center">
                <form className="flex gap-2 flex-col justify-center mt-10">
                    {/* brand and model */}
                    <div className="flex gap-2">
                        <input type="text" placeholder="Brand" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                        <input type="text" placeholder="Model" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    </div>
                    {/* Type and Model Year */}
                    <div className="flex gap-2">
                        {/* <input type="text" placeholder="Type" className="input input-bordered input-info border-blue-600 w-full max-w-xs" /> */}
                        <input type="text" placeholder="Model Year" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                        <select name='type' className="select select-bordered border-blue-600 w-full ">
                            <option disabled selected>Select Type</option>
                            <option>Sedan</option>
                            <option>Hatchback</option>
                            <option>SUV</option>
                            <option>Sports</option>
                            <option>Coupe</option>
                            <option>Convertible</option>
                            <option>MPV</option>
                        </select>
                        
                    </div>
                    {/* Price and Rating
                    <div className="flex gap-2">
                        <input type="text" placeholder="Expected Price" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                        <input type="text" placeholder="Rating" className="input input-bordered input-info border-blue-600 w-full max-w-xs" />
                    </div> */}
                    {/* message */}
                    <div className="flex gap-2">
                        <textarea type="text" placeholder="Write Your Message" className="p-4 h-24 input input-bordered input-info border-blue-600 w-full" />

                    </div>
                    <input type="submit" value="Pre Order" className="bg-blue-600 text-white px-2 py-2 rounded-md" />

                </form>
            </div>
        </div>
    );
};

export default Preorder;