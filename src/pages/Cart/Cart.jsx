import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const data = useLoaderData();
    return (
        <div className='flex h-[75vh] justify-center items-center'>
            {data.length > 0 ?
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
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((element, index) => <>
                                    <tr className="hover">
                                        <th>{index + 1}</th>
                                        <td>{element.brand} {element.model} {element.year}</td>
                                        <td>{element.type}</td>
                                        <td>${element.price}</td>
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