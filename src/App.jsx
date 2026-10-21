function App() {
  const N = 3
  const namaPanggilan = "Rifky"
  const jam = 9
  return (
    <>
     <h1 className="" style={{
      fontSize: "32px",
      fontWeight: "700",
      color: "darkblue"
     }}>Kantin {namaPanggilan}</h1>
     {jam < 12 ? "Selamat Pagi" : "Selamat Siang"}
     <p>Saldo awal kartu kantin: Rp{N * 1000}</p>
     <button disabled>Bayar</button>
    </>
  )
}

export default App
