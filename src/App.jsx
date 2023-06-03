import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Menu from "./components/pages/Menu";
import BuscarPlatos from "./components/pages/BuscarPlatos";
import DetallePlato from "./components/DetallePlato";
import usePlatos from "./helpers/hooks/usePlatos";

function App() {
  const { modal } = usePlatos()

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ 
              <BuscarPlatos />
            } />
            <Route path="/menu" element={
              <Menu />
            }/>
          </Route>
        </Routes>
      </Router>
      {modal && <DetallePlato />}
    </>
  )
}

export default App
