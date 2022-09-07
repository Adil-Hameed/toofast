import React from "react";
import Section3card from "../components/section3card";
import Data from "../api/data";

import { useState } from "react";

function Section3() {
    const [section3] = useState(Data.section3)
    return (
        <div>
            <div className="container text-black text-center mx-auto py-24">
                <h2 className="text-4xl font-medium">
                    {section3.h2}
                </h2>
                <hr className="w-14 mx-auto border-0 h-1 bg-[#F4623A] my-5" />
                <div className="grid  lg:grid-cols-4 md:grid-cols-2 md:mx-16 py-20">
                    <Section3card />
                </div>
            </div>
        </div>
    )
}
export default Section3