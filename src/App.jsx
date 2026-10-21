import Panel from "./components/Panel"
import KartuMenu from "./components/KartuMenu"

function App() {
  const N = 3;
  return (
    <>
      <Panel judul={"Menu Hari Ini"}>
        <KartuMenu nama={"nasi Ayam Geprek"} harga={10000 + (N * 100)} />
        <KartuMenu nama={"Es Teh lemon"} harga={6000} kategori="Minuman" />
        <KartuMenu nama={"Mie Goreng Telor"} harga={12000} />
      </Panel>
    </>
  )
}

export default App
