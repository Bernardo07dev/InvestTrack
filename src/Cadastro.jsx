import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Cadastro = () => {
    const [input, setInput] = useState('login');

    return(
        <div className="bg-[#F7F9FC] h-screen flex flex-col items-center">
            <header className="w-full flex flex-row justify-between py-8 px-16">
                {/* LOGO */}
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon className="bg-[#0A4D3C] text-white text-xl p-2 rounded-xl" icon={faMagnifyingGlassChart} />
                    <h1 className="text-lg font-bold tracking-tighter">Invest Track</h1>
                </div>

                <div className="flex flex-row gap-1 text-sm items-center tracking-tight">
                    <p>Ajuda? </p>
                    <p className="font-semibold">Fale como Suporte</p>
                </div>
            </header>

            <main className="w-[80%] bg-white p-6 shadow-xl shadow-[#00291107] rounded-lg flex flex-row">
                <div className="w-[50%] flex flex-col">
                    <div className={`flex flex-row gap-4 bg-[#F3F4F6] p-2 justify-between rounded-xl mb-6`}>
                        <div onClick={() => setInput("login")}  className={`${input === "login" ? "bg-white" : "bg-[#F3F4F6]"} transition-all duration-300 ease-in-out cursor-pointer rounded-xl p-2 text-center w-[50%]`}>
                            <p>Login</p>
                        </div>

                        <div onClick={() => setInput("cadastro")} className={`${input === "cadastro" ? "bg-white" : "bg-[#F3F4F6]"} transition-all duration-300 ease-in-out cursor-pointer rounded-xl p-2 text-center w-[50%]`}>
                            <p>Cadastro</p>
                        </div>
                    </div>

                    { input === "login" && (
                        <div>
                            <h1 className="text-xl font-semibold">Bem-vindo de Volta</h1>
                        </div>
                        )
                    }

                </div>

            </main>
            
        </div>
    )
}

export default Cadastro;