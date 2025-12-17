import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import Cadastro from './Cadastro.jsx'
import Dashboard from './Dashboard.jsx'

// 1º → Login/Cadastro (simples)
// 2º → Dashboard (página principal)
// 3º → Adicionar Investimento
// 4º → Lista de Investimentos
// 5º → Detalhes (se quiser)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cadastro/>}></Route>
        <Route path='/home' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
