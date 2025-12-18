import {useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart, faArrowRightFromBracket, faPlus, faWallet, faArrowUp, faArrowTrendUp, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {

    const idUsuario = localStorage.getItem('userId');
    const emailUsuario = localStorage.getItem('userEmail');
    const nomeUsuario = localStorage.getItem('userNome');
    const navigate = useNavigate();

    console.log(idUsuario);

    useEffect(() => {
        if(!idUsuario){
            navigate('/');
        }
    }, []);

    const Logout = () => {
        localStorage.clear();
        navigate('/');
    }

    if (!idUsuario) return null;

    const iniciais = nomeUsuario.slice(0, 2);

    return(
        <div className="min-h-screen bg-[#F7F9FC]">
            <header className="w-full flex flex-row justify-between py-4 px-16 fixed bg-white shadow-md shadow-[#e6e6e6a6]">
                {/* LOGO */}
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon className="bg-[#0A4D3C] text-white text-xl p-2 rounded-xl" icon={faMagnifyingGlassChart} />
                    <h1 className="text-lg font-bold tracking-tighter">Invest Track</h1>
                </div>

                <div className="flex flex-row gap-3 text-sm items-center justify-center tracking-tight">
                    <div className="flex flex-col items-end">
                        <p className="font-medium text-gray-700 -mb-0.5">{nomeUsuario}</p>
                        <p className="font-light text-xs text-gray-500">{emailUsuario}</p>
                    </div>
                    <p className="text-lg uppercase font-semibold bg-[#EDFAF9] px-3 py-2 text-[#0A4D3C] rounded-full border border-[#CFF1EF]">{iniciais}</p>

                    <div className="px-[0.7px] mx-2 h-10 bg-gray-300"></div>

                    <div onClick={() => Logout()} className="cursor-pointer flex flex-row gap-1 items-center">
                        <FontAwesomeIcon className="text-xl text-gray-400" icon={faArrowRightFromBracket} />
                        <p className="text-gray-400 font-medium">Sair</p>
                    </div>
                </div>
            </header>

            <div className="w-full px-18 z-10 pt-28">
                <section className="w-full flex flex-row justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold text-[#2C3E50]">Dashboard</h1>
                        <p className="text-xs text-gray-500">Visão geral da sua carteira de investimentos</p>
                    </div>

                    <div className="border border-[#0a4d3c71] bg-[#64d8a424] cursor-pointer text-[#0A4D3C] h-11 text-xs flex flex-row justify-center items-center px-6 gap-1 rounded-xl backdrop-blur-2xl">
                        <FontAwesomeIcon icon={faPlus} />
                        <p className="text-xs font-medium">Adicionar Investimento</p>
                    </div>
                </section>

                <section className="flex flex-row justify-between gap-4">
                    <div className="flex flex-col w-[33%] bg-white p-6 rounded-3xl items-baseline gap-2 shadow-md shadow-[#e6e6e680] border border-gray-200">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div className="">
                                <p className="text-xs text-gray-500">Total Investido</p>
                                <p className="text-2xl font-semibold text-[#2C3E50]">R$ 124.324,22</p>
                            </div>
                            <FontAwesomeIcon className="text-2xl p-3 text-[#0a4d3cc0] bg-[#E6EDEB] rounded-2xl border border-gray-200" icon={faWallet} />
                        </div>
                        <div className="flex flex-row gap-1 items-center text-sm text-[#32AE60] bg-[#F0FDF4] p-1 px-3 rounded-full border border-[#32ae5f1b]">
                            <FontAwesomeIcon className="text-xs" icon={faArrowUp} />
                            <p className="text-xs font-medium">12% este mês</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[33%] bg-white p-6 rounded-3xl items-baseline gap-2 shadow-md shadow-[#e6e6e680] border border-gray-200">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div className="">
                                <p className="text-xs text-gray-500">Rendimento Total</p>
                                <p className="text-2xl font-semibold text-[#2C3E50]">R$ 12.331,12</p>
                            </div>
                            <FontAwesomeIcon className="text-2xl p-3 text-[#0a4d3cc0] bg-[#E6EDEB] rounded-2xl border border-gray-200" icon={faArrowTrendUp} />
                        </div>
                        <div className="flex flex-row gap-1 items-center text-sm text-[#32AE60] bg-[#F0FDF4] p-1 px-3 rounded-full border border-[#32ae5f1b]">
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                            <p className="text-xs font-medium">+40%</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[33%] bg-white p-6 rounded-3xl items-baseline gap-1 shadow-md shadow-[#e6e6e680] border border-gray-200">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div className="">
                                <p className="text-xs text-gray-500">Saldo Atual</p>
                                <p className="text-2xl font-semibold text-[#2C3E50]">R$ 2.052,24</p>
                            </div>
                            <FontAwesomeIcon className="text-2xl p-3 text-[#2563EB] bg-[#EFF6FF] rounded-2xl border border-gray-200" icon={faDollarSign} />
                        </div>
                        <p className="text-sm text-gray-400">Disponível para investimento</p>
                    </div>
                </section>
            </div>

            <section className="mx-18 mt-10">
                <div className="w-[30%] bg-white p-6 rounded-3xl gap-2 shadow-md shadow-[#e6e6e680]">
                        <h1 className="text-xl font-semibold text-[#2C3E50]">Alocação</h1>
                </div>
            </section>

        </div>
    )
}

export default Dashboard;