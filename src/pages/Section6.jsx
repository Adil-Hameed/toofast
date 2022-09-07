import React from "react";
import Data from "../api/data";
import { useState } from "react";
function Section6() {
    const [section6] = useState(Data.section6)

    return (
        <div className="text-center lg:w-[40%] md:w-[75%] w-[85%] mx-auto py-20">
            <h2 className="text-4xl font-medium my-2">
                {section6.h2}
            </h2>
            <hr className="w-14 mx-auto border-0 h-1 bg-[#F4623A] my-5" />
            <p className="text-gray-500 my-8 text-xl">{section6.p}</p>
            <div className="w-full">
                {section6.placeholder.map((ele, i) => {
                    return (

                        <input key={i} className=" my-2 border-2 w-[100%] p-3 rounded" type="text" placeholder={ele} name="" id="" />
                    )
                })}
                <textarea className=" my-2 border-2 w-[100%] p-3 rounded " cols="30" placeholder={section6.textarea} rows="10"></textarea>
            </div>
            <button
                className="w-full my-2  rounded-full text-black bg-[#F4623A] border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600"><b>
                    {section6.button}</b>
            </button>
        </div>
    )

}
export default Section6