import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {

    const data = useLoaderData();
    const [cars,setCars]=useState(data);

    const handleDelete = (id) => {
        // console.log("deleting", id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount>0) {
                            const remaining = cars.filter(car=>car._id!=id);
                            setCars(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                                )
                            }
                            
                    })

            }
        })
    }
    return (
        <div className='flex h-[75vh] justify-center items-center'>
            {cars?.length > 0 ?
                <>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Model</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars?.map((element, index) => <>
                                    <tr className="hover">
                                        <th>{index + 1}</th>
                                        <td>{element.brand} {element.model} {element.year}</td>
                                        <td>{element.type}</td>
                                        <td>${element.price}</td>
                                        <td className=""><button onClick={() => handleDelete(element._id)} className="btn font-bold text-red-700">X</button></td>
                                    </tr>
                                </>)}
                            </tbody>
                        </table>
                    </div>
                </>
                :
                <h1 className="text-4xl font-bold italic font-serif">Cart is empty</h1>
            }
        </div>
    );
};

export default Cart;