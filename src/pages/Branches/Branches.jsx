import { useEffect } from "react";
import { useState } from "react";
import Branch from "./Branch";

const Branches = () => {
    const [branches, setBranches] = useState([]);
    useEffect(()=>{
        fetch("/branches.json")
        .then(res=>res.json())
        .then(data=>{
            setBranches(data);
        })
    },[])
    return (
        <div>
            <h1 className="p-4 text-4xl font-semibold text-center">We Have {branches.length} More Showrooms Near You</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {branches.map((element,i)=><Branch key={i} data={element}></Branch>)}
            </div>
        </div>
    );
};

export default Branches;