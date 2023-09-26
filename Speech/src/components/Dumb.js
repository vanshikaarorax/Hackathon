import React from "react";
import { Link } from "react-router-dom";

const Dumb =()=>{
    return (
        <div className="flex flex-row text-blue-900">
        Dumb

        <Link to="/">
        <button className="border h-8 w-10 bg-gray-500 text-gray-800">Back </button>
        </Link>
    </div>)
   
}
export default Dumb;