import Marquee from "react-fast-marquee";
import Customer from "./Customer";
import { useState } from "react";
import { useEffect } from "react";


const Customers = () => {
    
    const [customer, setCustomer] = useState([]);
    useEffect(()=>{
        fetch("/public/customers.json")
        .then(res=>res.json())
        .then(data=>{
            setCustomer(data);
            // console.log(data);
        })
    },[])
    

    return (
        <div>
            <h1 className="p-4 text-4xl font-semibold text-center">See What Our Happy Clients Say About Us...</h1>
            {/* {customer.length} */}
            <Marquee>
                {/* I Love You Purno */}
                {customer?.map(element=><Customer key={element._id} customers={element}></Customer>)}

            </Marquee>
        </div>
    );
};

export default Customers;