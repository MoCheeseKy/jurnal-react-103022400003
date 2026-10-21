import React from "react"
import LabelHarga from "../LabelHarga"
import { useState } from "react"

export default function KartuMenu({nama, harga, kategori = "Makanan"}){
    const [Jumlah, setJumlah] = useState(0)
    const [Catatan, setCatatan] = useState("")

    function TambahJumlah (){
        setJumlah(Jumlah + 1)
    }

    return(
        <>
            <div className="kartu">
                <h1>{nama}</h1>
                <p>{kategori}</p>
                <LabelHarga nilai={harga} />
                <div className="kontrol">
                    <button onClick={() => TambahJumlah()}>+</button>
                    <p>{Jumlah}</p>
                    <button disabled={Jumlah <= 0} onClick={() => setJumlah(Jumlah - 1)}>-</button>
                </div>
                <p>{Jumlah === 0?
                    "Belum Dipesan"
                    : `Subtotal: Rp${harga * Jumlah}`
                }</p>
                <div className="kontrol">
                    {Jumlah >= 5 && (
                        <div className="badge">Pesanan Banyak</div>
                    )}
                    <label htmlFor="catatan">Catatan Pesanan</label>
                    <input type="text" id="catatan" onChange={(e) => setCatatan(e?.target?.value)} />
                </div>
                {Catatan !== "" &&(
                    <p>Catatan: {Catatan}</p>
                )}
            </div>
        </>     
    )
}       