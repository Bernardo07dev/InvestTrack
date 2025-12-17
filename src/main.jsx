import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import Cadastro from './Cadastro.jsx'

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
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
