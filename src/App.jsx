import Panel from "./components/Panel"
import KartuMenu from "./components/KartuMenu"
import { useState } from "react";

function App() {
  const N = 3;
  const [Menus, setMenus] = useState([
    {
      "id": 1,
      "nama": "Nasi Goreng Seafood",
      "harga": 15000,
      "kategori": "Makanan"
    },
    {
      "id": 2,
      "nama": "Nasi Goreng Kecombrang",
      "harga": 15000,
      "kategori": "Makanan"
    },
    {
      "id": 3,
      "nama": "Nasi Goreng Merah",
      "harga": 15000,
      "kategori": "Makanan"
    },
    {
      "id": 4,
      "nama": "Minuman Ethanol",
      "harga": 100000,
      "kategori": "Minuman"
    },
    {
      "id": 5,
      "nama": "Americano",
      "harga": 5000,
      "kategori": "Minuman"
    },
  ])

  function Hapus (id){
    setMenus((Menus) => Menus.filter((prev) => {prev?.id !== id}))
  }

  function ReverseData(){
    let newData = []
    for(let i=Menus?.length; i=0; i--){
      newData.join(Menus[i])
    }

    setMenus(newData)
  }
  
  return (
    <>
    <button onClick={() => ReverseData()}>Balik Urutan</button>
      <Panel judul={"Menu Hari Ini"}>
        {Menus !== 0 ? (
          Menus?.map((item) => (
            <KartuMenu 
              id={item?.id} 
              nama={item?.nama} 
              harga={item?.harga} 
              kategori={item?.kategori}
              onHapus={() => {
                console.log(item?.id);
                
                Hapus(item?.id)
              }}
            />
          ))
        ) : (<p>Semua Menu Habis Terjual</p>)}
      </Panel>
    </>
  )
}

export default App
