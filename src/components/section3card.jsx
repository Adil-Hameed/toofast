// import React from 'react'
import Data from '../api/data'
import { useState } from 'react'

export default function Section3card() {
    const [section3] = useState(Data.section3.card)
    return (
        <>
            {
                section3.map((ele, i) => {
                    return (
                        <div className="card mx-5 my-5" >
                            <div className="text-[#F4623A] text-5xl">
                                <ion-icon name={ele.icon}></ion-icon>
                            </div>
                            <h3 className="text-2xl font-medium">{ele.h3}</h3>
                            <p className="text-gray-500 px-5">{ele.p}</p>
                        </div >
                    )
                })
            }
        </>
    )
}
