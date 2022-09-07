import React from "react";
import Data from "../api/data";
import { useState } from "react";
function Section5() {
    const [section5] = useState(Data.section5)
    return (
        <div className="bg-gray-900 py-36 text-center">
            <h1 className="text-white text-4xl pb-8">{section5.h1}</h1>
            <button
                className=" mx-auto text-black bg-white border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded-full">
                <b>{section5.button}</b>
            </button>
        </div>
    );

}
export default Section5