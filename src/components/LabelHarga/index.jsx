import React from "react"

export default function LabelHarga({nilai}){
    return(
        <>
            <p>Rp{nilai.toLocaleString("id-ID")}</p>
        </>
    )
}