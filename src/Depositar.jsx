import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import {useState} from "react";


const Depositar = ({ open, setOpen }) => {

    const [adiciona, setAdiciona] = useState()

    const GetSaldo = async (e) => {
        e.preventDefault();
        try{
            axios.post('https://backend-investtrack.onrender.com/transaction/', {
                "user": Number(localStorage.getItem('userId')),
                "valor": adiciona,
                "tipo":"adicionar"
            })
            window.location.reload();
            }catch(error){
                console.log(error);
            }
    }

    return(
        <div className={`h-screen w-full absolute z-20 bg-white/20 backdrop-blur-xs flex items-center justify-center ${open ? "flex" : "hidden"}`}>
            <div className="sm:w-[40%] w-full sm:mx-0 mx-8 bg-white p-12 pt-8 rounded-3xl shadow-md shadow-[#e6e6e680] border border-gray-200">
                <div className="w-full flex justify-end cursor-pointer">
                    <FontAwesomeIcon onClick={() => setOpen(false)} className="-mr-2 text-gray-500 text-sm" icon={faX}/>
                </div>

                <h1 className="text-xl font-semibold text-[#2C3E50] mb-4">Adicionar Saldo</h1>
                <form>
                    <p className="text-sm text-gray-600 mb-2">Quanto você quer adicionar:</p>
                    <input type="number" onChange={(e) => setAdiciona(e.target.value)} value={adiciona} className="outline-none bg-[#F7F9FC] p-4 rounded-xl border border-gray-300 flex flex-row items-center text-sm text-gray-700 ont-medium ring-0 focus:ring-0 focus:outline-none w-full" placeholder="Insira o valor"/>
                    <button onClick={(e) => GetSaldo(e)} className="mt-6 p-3 px-6 border border-[#0a4d3c29] backdrop-blur-2xl bg-[#64d8a42e] rounded-xl cursor-pointer text-[#0A4D3C] text-xs">Adicionar</button>
                </form>

            </div>
        </div>
    )
}

export default Depositar;