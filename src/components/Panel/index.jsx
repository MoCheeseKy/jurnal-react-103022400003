import React from "react"

export default function Panel({judul, children}){
    return(
        <>
            {
                judul ? (
                    <h1>{judul}</h1>
                )
                : ""
            }
            {children}
        </>
    )
}