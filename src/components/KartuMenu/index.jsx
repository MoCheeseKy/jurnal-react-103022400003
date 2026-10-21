import React from "react"
import LabelHarga from "../LabelHarga"

export default function KartuMenu({nama, harga, kategori = "Makanan"}){
    return(
        <>
            <div className="kartu">
                <h1>{nama}</h1>
                <p>{kategori}</p>
                <LabelHarga nilai={harga} />
            </div>
        </>     
    )
}