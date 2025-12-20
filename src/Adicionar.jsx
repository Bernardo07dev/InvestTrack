import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adicionar = ({ open, setOpen }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selecionado, setSelecionado] = useState(false);
    const [choice, setChoice] = useState([]);
    const [quant, setQuant] = useState(0)
    const agora = new Date().toISOString().split('T')[0];

    const navigate = useNavigate();

    const seleciona = (item) => {
        setSelecionado(true);
        setQuery(item.name);
        setChoice(item)
        console.log(item);
    }

    const createInvestmento = async (e) => {
        e.preventDefault();
        alert("Investimento criado com sucesso!")
        try{
            const build = await axios.post('https://backend-investtrack.onrender.com/investimentos/', {
                "user": Number(localStorage.getItem('userId')),
                "stock": choice.name,
                "ticker": choice.stock,
                "quantidade": quant,
                "data": agora,
                "price": choice.close,
                "total": Number((choice.close * quant).toFixed(2)),
                "img": choice.logo
            }) 
            console.log(build.data);
            window.location.reload();
        } catch(error){
            console.log(error);
        }

    }

    const API_TOKEN = import.meta.env.VITE_BRAPI_TOKEN; 

    const API_URL = 'https://brapi.dev/api/quote/list';

    useEffect(() => {
        if (query.length === 0) return;

        const delayDebounce = setTimeout(async () => {
        try {
            const response = await axios.get(API_URL, {
            params: { 
                search: query,
                token: API_TOKEN
            } 
            });

            setResults(response.data.stocks || []);

        } catch (err) {
            console.error("Erro:", err);
        }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query, API_TOKEN]);

    if (!open) return null

    return(
        <div className={`h-screen w-full absolute z-20 bg-white/20 backdrop-blur-xs flex items-center justify-center`}>
            <div className="w-[40%] bg-white p-12 pt-8 rounded-3xl shadow-md shadow-[#e6e6e680] border border-gray-200">
                <div className="w-full flex justify-end cursor-pointer">
                    <FontAwesomeIcon onClick={() => setOpen(false)} className="-mr-2 text-gray-500 text-sm" icon={faX}/>
                </div>

                <h1 className="text-xl font-semibold text-[#2C3E50] mb-4">Adicionar Investimento</h1>
                <form onSubmit={(e) => createInvestmento(e)}>
                    <p className="text-sm text-gray-600 mb-2">Escolher ação</p>
                    <input type="text" disabled={selecionado} onChange={(e) => setQuery(e.target.value)} value={query} className="outline-none bg-[#F7F9FC] p-4 rounded-xl border border-gray-300 flex flex-row items-center text-sm text-gray-700 ont-medium ring-0 focus:ring-0 focus:outline-none w-full" placeholder="Insira o nome do ativo"></input>
                    <div className={`bg-[#F7F9FC] text-xs text-gray-600 flex-col transition-all ease-in-out cursor-pointer max-h-50 overflow-y-scroll scrollbar-hide rounded-b-2xl ${query.length === 0 || selecionado ? "none" : "flex" }`}>
                        {results.length === 0 && !selecionado && query.length !== 0 ? (
                            <p className="p-6">Nennum resultado encontrado</p>
                        ) : (
                            results.slice(0, 15).map((r, index) => (
                                <div className="hover:bg-[#e2e3e8] flex flex-row items-baseline justify-between gap-4 p-5" onClick={() => seleciona(r)} key={index}>
                                    <p>{r.name}</p>
                                    <p className="text-xs font-semibold">{r.stock}</p>
                                </div>
                            ))
                        )}
                    </div>
                    {selecionado && (
                        <div className="pt-4 pb-0 px-2 text-xs text-gray-500 flex flex-row items-center gap-2">
                            <img className="w-6 rounded-md" src={choice.logo}></img>
                            <p>{choice.stock}</p>
                            <p className="font-medium bg-gray-100 rounded-md p-1 px-2">R$ {choice.close}</p>
                            <p>{choice.sector}</p>
                        </div>
                    )}
                    <p className="text-sm text-gray-600 mb-2 mt-6">Quantidade</p>
                    <input type="number" className="outline-none bg-[#F7F9FC] p-4 rounded-xl border border-gray-300 flex flex-row items-center text-sm text-gray-700 ont-medium ring-0 focus:ring-0 focus:outline-none w-full" onChange={(e) => setQuant(e.target.value)} value={quant} placeholder="Insira a quantidade de cotas"></input>
                    {quant !== 0 && quant !== "" && (
                        <p className="pt-4 px-2 text-xs text-gray-600">Valor Investido: <span className="font-medium text-gray-600 underline text-sm">R$ {(choice.close * quant).toFixed(2)}</span></p>
                    )}
                    <button className="mt-6 p-3 px-6 border border-[#0a4d3c29] backdrop-blur-2xl bg-[#64d8a42e] rounded-xl cursor-pointer text-[#0A4D3C] text-xs">Adicionar</button>
                </form>
            </div>     
        </div>
    )
}

export default Adicionar;