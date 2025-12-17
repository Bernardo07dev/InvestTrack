import {useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {

    const idUsuario = localStorage.getItem('userId');
    const emailUsuario = localStorage.getItem('userEmail');
    const nomeUsuario = localStorage.getItem('userNome');
    const iniciais = nomeUsuario.slice(0, 2);
    const navigate = useNavigate();

    console.log(idUsuario);

    useEffect(() => {
        if(!idUsuario){
            navigate('/');
        }
    }, []);

    return(
        <div className="min-h-screen">
            <header className="w-full flex flex-row justify-between py-8 px-16">
                {/* LOGO */}
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon className="bg-[#0A4D3C] text-white text-xl p-2 rounded-xl" icon={faMagnifyingGlassChart} />
                    <h1 className="text-lg font-bold tracking-tighter">Invest Track</h1>
                </div>

                <div className="flex flex-row gap-4 text-sm items-center tracking-tight">
                    <div className="flex flex-col items-end">
                        <p className="font-medium text-base text-gray-800 -mb-0.5">{nomeUsuario}</p>
                        <p className="font-light text-gray-500">{emailUsuario}</p>
                    </div>
                    <p className="text-xl uppercase ">{iniciais}</p>
                </div>
            </header>

        </div>
    )
}

export default Dashboard;