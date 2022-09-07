import React, { useState } from "react";
import Data from "../api/data";

function Navbar() {
    const [navbar] = useState(Data.navbar)
    const [Color, setcolor] = useState(true)
    const Change = () => {
        if (window.scrollY >= 80) {

            setcolor(false)
        }
        else {
            setcolor(true)


            // console.log("checking")
        }
    }
    window.addEventListener("scroll", Change)


    return (
        <nav
            className={Color ? `fixed z-10 md:flex md:items-center md:justify-between w-full mx-auto bg-transparent px-10 text-white` : `fixed z-10 md:flex md:items-center md:justify-between w-full mx-auto bg-white px-10 text-black`}>
            <div className="flex justify-between items-center">
                <h1 className="hover:cursor-pointer hover:text-blue-900 w-56 py-5 px-10 text-2xl">{navbar.h1}</h1>
            </div>
            <ul
                className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[400px]">
                {navbar.li.map((ele, i) => {
                    return (
                        <li key={i} className="mx-4 my-6 md:my-0 text-xl hover:cursor-pointer hover:text-blue-900 duration-500 ">{ele}</li>
                    )
                })}
            </ul>
        </nav>
    )

}
export default Navbar