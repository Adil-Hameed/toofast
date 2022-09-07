import React from "react";
import { useState } from "react";
import Data from "../api/data";

function Section1() {
    const [section1] = useState(Data.section1)
    return (
        <div className=" text-white section2 py-28">
            <div className="mx-auto text-center lg:w-[50%]  w-[75%]">
                <h1 className="lg:text-6xl text-4xl py-6">
                    {section1.h1}
                </h1>
                <hr className="w-14 mx-auto border-0 h-1 bg-[#F4623A]" />
                <p className="text-gray-400 text-xl py-6">{section1.p}</p>
                <button
                    className="w-44 mx-auto text-white  bg-[#F4623A]  py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded-full">
                    <b>
                        {section1.button}
                    </b>
                </button>
            </div>
        </div>
    )

}
export default Section1