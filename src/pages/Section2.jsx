import React from "react";
import Data from "../api/data";
import { useState } from "react";
function Section2() {
    const [section2] = useState(Data.section2)


    return (
        <div className="grid grid-rows-1 grid-cols-1 bg-[#F4623A]">
            <div className=" lg:w-[52%] w-[75%] mx-auto text-center text-white py-40">
                <h2 className="text-4xl">
                    {section2.h2}
                </h2>
                <hr className="w-14 mx-auto border-0 h-1 bg-white my-5" />
                <p className="text-[1.1rem] py-5">
                    {section2.p}
                </p>
                <button
                    className="w-44 mx-auto text-black bg-white border-0 py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded-full">
                    <b>
                        {section2.button}
                    </b>
                </button>
            </div>
        </div>
    );

}
export default Section2