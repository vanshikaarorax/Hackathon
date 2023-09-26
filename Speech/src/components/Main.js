import React from "react";
import { Link } from "react-router-dom";

const Main= ()=>{
return(
    <div>
        {/*Blind*/ }
        <div className="flex flex-row">
        <div className="h-[400px] w-[600px] flex items-center justify-center bg-blue-900 border hover:scale-125 transition duration-75 hover:opacity-40 ml-5">
            <Link to="/blind" >
            <button className="border rounded-sm bg-green-300 h-9 w-20 z-10">next</button>
            </Link>
        </div>
        <p className="mt-40 text-">Blind individuals often face difficulties in accessing information and navigating their surroundings</p>
        </div>

         {/*Deaf*/ }
         <div className="flex flex-row">
         <p className="mt-40 text-">Deaf individuals may encounter communication barriers and limited access to auditory information</p>
        <div className="h-[400px] w-[600px] flex items-center justify-center bg-blue-900 border hover:scale-125 transition duration-75 hover:opacity-40 ml-5">
           <Link to="/deaf">
           <button className="border rounded-sm bg-green-300 h-9 w-20 z-10">next</button>
           </Link>
        </div>
       
        </div>

         {/*Mute*/ }
         <div className="flex flex-row">
        <div className="h-[400px] w-[600px] flex items-center justify-center bg-blue-900 border hover:scale-125 transition duration-75 hover:opacity-40 ml-5">
           <Link to="/Mute">
           <button className="border rounded-sm bg-green-300 h-9 w-20 z-10">next</button>
           </Link>
        </div>
        <p className="mt-40 text-">Mute individuals often struggle with expressing themselves verbally and may rely on sign language or assistive technology</p>
        </div>

         {/*Dumb*/ }
         <div className="flex flex-row">
         <p className="mt-40 text-">Deaf individuals may encounter communication barriers and limited access to auditory information</p>
        <div className="h-[400px] w-[600px] flex items-center justify-center bg-blue-900 border hover:scale-125 transition duration-75 hover:opacity-40 ml-5">
            <Link to="/Dumb">
            <button className="border rounded-sm bg-green-300 h-9 w-20 z-10">next</button>
            </Link>
        </div>
       
        </div>

        
    </div>
)
}
export default Main;