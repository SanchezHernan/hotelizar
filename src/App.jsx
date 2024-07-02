// src/App.jsx
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resultados from './pages/Resultados';
import Login from './pages/Login';
import Alojamiento from './pages/Alojamiento';
import Registro1 from './pages/Registro1';
import Panel from './pages/Dashboard/Panel';
import SubirAlojamiento from './pages/Alojamiento/SubirAlojamiento';
import Propietario from './pages/Propietario';
import PageMapa from './pages/PageMapa';
import { UserProvider } from './contexts/UserContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
        <Route index element={<Home />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro1 />} />
          <Route path="/alojamiento/:id" element={<Alojamiento />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/propietario" element={<Propietario />} />
          <Route path="/subir-alojamiento" element={<SubirAlojamiento />} />
          <Route path="/mapa" element={<PageMapa />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
