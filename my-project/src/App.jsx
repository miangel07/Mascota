import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/AdministrarMascota.jsx";
import AgregarMascota from "./components/AgregarMascota";
import Editar from "./pages/Editar.jsx";
import EdiatrMascotaPages from "./pages/EditarMascotaPages.jsx";
import ProteccionRuta from "./utils/ProteccionRuta.jsx";

import "./App.css";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProteccionRuta />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/agregarMascota" element={<AgregarMascota />} />
          <Route path="/ver/:id" element={<Editar />} />
          <Route path="/actualizar/:id" element={<EdiatrMascotaPages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
