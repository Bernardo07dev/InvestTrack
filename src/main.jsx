import { StrictMode ,Suspense, lazy } from "react"
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import Loading from "./Loading";

const Cadastro = lazy(() => import("./Cadastro"))
const Dashboard = lazy(() => import("./Dashboard"))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Cadastro/>}></Route>
          <Route path='/home' element={<Dashboard/>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
