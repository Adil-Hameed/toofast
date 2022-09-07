import React from "react";

import Data from "../api/data";
import { useState } from "react";

function Section4() {
    const [img] = useState(Data.section4.img)
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2">
            {img.map((ele, i) => {
                return (
                    <div key={i}>
                        <img className="h-full" src={ele} alt="" />
                    </div>
                )
            })}
        </div>
    )
}
export default Section4