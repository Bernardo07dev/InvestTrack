import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart, faArrowRightFromBracket, faPlus, faWallet, faTrash, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Adicionar from "./Adicionar";
import axios from "axios";
import Depositar from "./Depositar";

const Dashboard = () => {
    const idUsuario = localStorage.getItem('userId');
    const emailUsuario = localStorage.getItem('userEmail');
    const nomeUsuario = localStorage.getItem('userNome');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openAd, setOpenAd] = useState(false);
    const [carteira, setCarteira] = useState([])
    const [investimentos, setInvestimentos] = useState([]);

    const fetchSaldo = async (price) => {
        try{
            await axios.post('https://backend-investtrack.onrender.com/transaction/', {
                "user": Number(idUsuario),
                "valor": price,
                "tipo":"adicionar"
            })
            }catch(error){
                console.log(error);
            }
    }

    const formatarData = (dataIso) => {
        if (!dataIso) return "";
        const dataObj = new Date(dataIso + "T00:00:00");
        const dia = dataObj.getDate().toString().padStart(2, '0');
        const ano = dataObj.getFullYear();
        let mesAbreviado = dataObj.toLocaleDateString('pt-BR', { month: 'short' });
        mesAbreviado = mesAbreviado.replace('.', '');
        return `${dia}, ${mesAbreviado}. ${ano}`;
    };

    const deleteInvest = async (stock, total) => {
        try{ const response = await axios.delete('https://backend-investtrack.onrender.com/delete_invest/', {
            data: {
            "user": Number(idUsuario),
            "stock": stock
        }})
        console.log(response.data);
        await fetchSaldo(total)
        window.location.reload();
        } catch (error){
            console.log(error);
        }       
    }

    const fetchInvestimentos = async () => {
        try{
            const response = await axios.post('https://backend-investtrack.onrender.com/get-investimentos/', {
                "user": Number(idUsuario)
            } 
            )
            setInvestimentos(response.data);
            localStorage.setItem('saldo', response.data[0].saldo);
        } catch(error){
            console.log(error);
        }
    }

    const getInvestimentos = async () => {
        try{
            const response = await axios.post('https://backend-investtrack.onrender.com/carteira/', {
                "user": Number(idUsuario)
            } 
            )
            console.log(response.data);
            setCarteira(response.data);
            localStorage.setItem('saldo', response.data.saldo);
        } catch(error){
            console.log(error);
        }
    }

    console.log(idUsuario);

    useEffect(() => {
        if(!idUsuario){
            navigate('/');
            return
        }else{
            fetchInvestimentos();
            getInvestimentos();
        }
    }, []);

    const Logout = () => {
        localStorage.clear();
        navigate('/');
    }

    if (!idUsuario) return null;

    const iniciais = nomeUsuario.slice(0, 2);

    return(
        <div className="min-h-screen bg-[#F7F9FC] pb-12">
            <Adicionar open={open} setOpen={setOpen} />
            <Depositar open={openAd} setOpen={setOpenAd} />
            <header className="w-full flex flex-row justify-between py-4 px-16 z-10 fixed bg-white shadow-md shadow-[#e6e6e6a6]">
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

                    <div onClick={() => setOpen(true)} className="border border-[#0a4d3c71] bg-[#64d8a424] cursor-pointer text-[#0A4D3C] h-11 text-xs flex flex-row justify-center items-center px-6 gap-1 rounded-xl backdrop-blur-2xl">
                        <FontAwesomeIcon icon={faPlus} />
                        <p className="text-xs font-medium">Adicionar Investimento</p>
                    </div>
                </section>

                <section className="flex flex-row justify-between gap-4">
                    <div className="flex flex-col  w-[50%] bg-white justify-center px-6 rounded-3xl items-baseline gap-2 shadow-md shadow-[#e6e6e680] border border-gray-200">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div className="">
                                <p className="text-xs text-gray-500">Total Investido</p>
                                <p className="text-2xl font-semibold text-[#2C3E50] py-2">R$ {carteira.investido}</p>
                            </div>
                            <FontAwesomeIcon className="text-2xl p-3 text-[#0a4d3cc0] bg-[#E6EDEB] rounded-2xl border border-gray-200" icon={faWallet} />
                        </div>
                    </div>


                    <div className="flex flex-col w-[50%] bg-white p-6 rounded-3xl items-baseline gap-1 shadow-md shadow-[#e6e6e680] border border-gray-200">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div className="">
                                <p className="text-xs text-gray-500">Saldo Atual</p>
                                <div className="flex flex-rowc gap-3 items-center py-2">
                                    <p className="text-2xl font-semibold text-[#2C3E50]">R$ {carteira.saldo}</p>
                                    <FontAwesomeIcon onClick={() => setOpenAd(true)} className="text-sm bg-[#F3F6F5] text-[#2c3e50aa] p-2 rounded-lg cursor-pointer" icon={faPlus} />
                                </div>
                            </div>
                            <FontAwesomeIcon className="text-2xl p-3 text-[#2563EB] bg-[#EFF6FF] rounded-2xl border border-gray-200" icon={faDollarSign} />
                        </div>
                    </div>
                </section>
            </div>

            <section className="mx-18 mt-10 flex flex-row justify-between gap-4">

                <div className="w-full bg-white p-8 pb-2 rounded-3xl gap-2 shadow-md shadow-[#e6e6e680]">
                    <h1 className="text-lg font-semibold text-[#2C3E50] mb-4">Investimentos</h1>
                    <div className="flex flex-col ">
                        <div className="flex flex-row text-sm capitalize mb-4 gap-4">
                            <div className="flex w-[35%] "><h1>Ativo</h1></div>
                            <div className="flex w-[21%]"><h1>Preço <span className="text-[10px] text-gray-500">/ Cotas</span></h1></div>
                            <div className="flex w-[21%]"><h1>Valor</h1></div>           
                            <div className="flex w-[21%]"><h1>Data</h1></div>
                        </div>
                        {investimentos.map(
                            (item, index) => (
                                <div key={index} className="flex flex-row capitalize text-xs gap-4 mb-8">
                                    <div className="flex justify-start items-center w-[35%] text-gray-600 gap-2">
                                        <img className="w-8 rounded-lg" src={item.img}></img>
                                        <h1>{item.stock}</h1>
                                    </div>
                                    <div className="flex w-[19%] justify-start items-center">
                                        <h1 className="">R${item.price} <span className="text-[10px] text-gray-600 font-light">/  {item.quantidade}</span></h1>
                                    </div>
                                    <div className="flex ml-0 w-[19%] justify-start items-center"><h1 className="p-2 bg-[#f3f6f5] rounded-lg" >R$ {item.total}</h1></div>           
                                    <div className="flex w-[19%] justify-start -mr-16 items-center italic"><h1>{formatarData(item.data)}</h1></div>
                                    <FontAwesomeIcon onClick={() => deleteInvest(item.ticker, item.total)} className="w-[6%] bg-red-50 text-red-400 p-3 text-md rounded-lg cursor-pointer" icon={faTrash} />
                                </div>
                        )
                        )}
                    </div>
                       
                </div>
            </section>

        </div>
    )
}

export default Dashboard;