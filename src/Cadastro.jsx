import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart, faAt, faLock, faChartColumn, faArrowUp, faUser} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom"


const Cadastro = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('login');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errormsg, setErrormsg] = useState(false);

    const [nomeCad, setnomeCad] = useState('');
    const [emailCad, setEmailCad] = useState('');
    const [senhaCad, setSenhaCad] = useState('');

    const verifyData = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('https://backend-investtrack.onrender.com/login/', 
                {
                    "email": email,
                    "senha": senha
                }
            );

            console.log(response.data);   
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userEmail', response.data.email);
            localStorage.setItem('userNome', response.data.nome);
            navigate('/home');

        } catch (error) {
            console.error("Erro no login:", error);
            setErrormsg(true);
        }
    }

    const CreateUser = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://backend-investtrack.onrender.com/create/', 
                {
                    "nome": nomeCad,
                    "email": emailCad,
                    "senha": senhaCad
                }
            )
            console.log(response.data);
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userEmail', response.data.email);
            localStorage.setItem('userNome', response.data.nome);
            navigate('/home');
        } catch (error) {
            console.error("Erro no cadastro:", error);        
        }
    }

    return(
        <div className="bg-[#F7F9FC] min-h-screen flex flex-col items-center">
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

            <main className="w-[80%] bg-white mb-12 shadow-2xl shadow-[#e6e6e6] border-2 border-gray-100 rounded-4xl flex flex-row">
                <div className="w-[55%] flex flex-col py-6 px-8">
                    <div className={`flex flex-row gap-4 bg-[#F3F4F6] p-2 text-sm font-medium justify-between rounded-xl mb-6`}>
                        <div onClick={() => setInput("login")}  className={`${input === "login" ? "bg-white" : "bg-[#F3F4F6]"} transition-all duration-300 ease-in-out cursor-pointer rounded-xl p-2 text-center w-[50%]`}>
                            <p>Login</p>
                        </div>

                        <div onClick={() => setInput("cadastro")} className={`${input === "cadastro" ? "bg-white" : "bg-[#F3F4F6]"} transition-all duration-300 ease-in-out cursor-pointer rounded-xl p-2 text-center w-[50%]`}>
                            <p>Cadastro</p>
                        </div>
                    </div>

                    { input === "login" ? (
                        <div className="p-8 py-4 transition-all duration-300 ease-in-out">
                            <h1 className="text-3xl font-semibold">Bem-vindo de Volta</h1>
                            <p className="text-sm text-gray-500">Coloque seus dados para acessar sua conta</p>

                            <form onSubmit={verifyData} className="mt-4">
                                <h2 className="font-semibold text-sm text-gray-700 mb-2">Email</h2>
                                <div className="bg-[#F7F9FC] flex flex-row items-center text-sm gap-2 p-4 rounded-xl border-2 border-[#c6c6c64e]">
                                    <FontAwesomeIcon className="text-gray-400 text-lg font-light" icon={faAt} />
                                    <input type="email" className="outline-none font-medium ring-0 focus:ring-0 focus:outline-none w-full" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Insira ser Email" />
                                </div>

                                <h2 className="font-semibold text-sm text-gray-700 mt-4 mb-2">Senha</h2>
                                <div className="bg-[#F7F9FC] flex flex-row items-center text-sm gap-2 p-4 rounded-xl border-2 border-[#c6c6c64e]">
                                    <FontAwesomeIcon className="text-gray-400 text-lg font-light" icon={faLock} />
                                    <input type="password" className="outline-none font-medium ring-0 focus:ring-0 focus:outline-none w-full" placeholder="Insira sua Senha" onChange={(e) => setSenha(e.target.value)} value={senha}/>
                                </div>

                                {errormsg && (
                                    <p className="pt-4 text-sm font-medium text-red-900 ease-in-out">Email ou senha incorretos</p>
                                )}

                                <button className="p-4 cursor-pointer bg-[#0A4D3C] text-center text-sm w-full mt-6 rounded-2xl text-white font-semibold">Entrar</button>
                            </form>

                            <div className="my-8 relative items-center flex justify-center text-xs uppercase bg-gray-200 h-[1.8px]">
                                <span className="bg-white px-3 text-gray-400 font-medium tracking-wider">Ou continuar com</span>
                            </div>

                            <div className="flex flex-row gap-2">
                                <div className="w-[50%] flex flex-row items-center justify-center p-4 border-2 rounded-2xl border-gray-200">
                                    <FontAwesomeIcon icon={faGoogle} className="text-gray-400 text-lg"></FontAwesomeIcon>
                                </div>
                                <div className="w-[50%] flex flex-row items-center justify-center p-4 border-2 rounded-2xl border-gray-200">
                                    <FontAwesomeIcon icon={faApple} className="text-gray-400 text-2xl"></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        ) : input === "cadastro" && (
                        <div className="p-8 py-4 transition-all duration-300 ease-in-out">
                            <h1 className="text-2xl font-semibold">Faça seu cadastro</h1>
                            <p className="text-sm mt-1 text-gray-600">Coloque seus dados para criar sua conta</p>

                            <form className="mt-4" onSubmit={CreateUser}>
                                <h2 className="font-semibold text-sm text-gray-700 mb-2">Nome</h2>
                                <div className="bg-[#F7F9FC] flex flex-row items-center text-sm gap-2 p-4 mb-4 rounded-xl border-2 border-[#c6c6c64e]">
                                    <FontAwesomeIcon className="text-gray-400 text-lg font-light" icon={faUser} />
                                    <input className="outline-none font-medium ring-0 focus:ring-0 focus:outline-none w-full" onChange={(e) => setnomeCad(e.target.value)} value={nomeCad} placeholder="Insira seu nome"></input>
                                </div>
                                
                                <h2 className="font-semibold text-sm text-gray-700 mb-2">Email</h2>
                                <div className="bg-[#F7F9FC] flex flex-row items-center text-sm gap-2 p-4 rounded-xl border-2 border-[#c6c6c64e]">
                                    <FontAwesomeIcon className="text-gray-400 text-lg font-light" icon={faAt} />
                                    <input className="outline-none font-medium ring-0 focus:ring-0 focus:outline-none w-full" onChange={(e) => setEmailCad(e.target.value)} value={emailCad} placeholder="Insira ser Email"></input>
                                </div>

                                <h2 className="font-semibold text-sm text-gray-700 mt-4 mb-2">Crie sua Senha</h2>
                                <div className="bg-[#F7F9FC] flex flex-row items-center text-sm gap-2 p-4 rounded-xl border-2 border-[#c6c6c64e]">
                                    <FontAwesomeIcon className="text-gray-400 text-lg font-light" icon={faLock} />
                                    <input type="password" className="outline-none w-full font-medium ring-0 focus:ring-0 focus:outline-none" onChange={(e) => setSenhaCad(e.target.value)} value={senhaCad}  placeholder="Insira sua Senha"></input>
                                </div>

                                <button className="p-4 cursor-pointer bg-[#0A4D3C] text-center text-sm w-full mt-6 rounded-2xl text-white font-semibold">Entrar</button>
                            </form>
                        </div>
                        )
                    }

                </div>

                <div className="w-[45%] bg-linear-to-br shadow-xl p-12 from-[#0A4D3C] to-[#052e24] rounded-4xl text-white flex flex-col justify-between">
                    <div className="w-fit rounded-xl border border-white/20 p-4 backdrop-blur-2xl bg-white/3 flex flex-row gap-2 inset-shadow-lg items-center shadow-2xl shadow-black/35">
                        <FontAwesomeIcon className="bg-green-400 p-3 rounded-lg" icon={faChartColumn}></FontAwesomeIcon>
                        <div>
                            <p className="font-extralight text-white/50 text-xs uppercase mb-[0.5px]">Market Update</p>
                            <div className="text-white gap-1 text-sm font-light flex flex-row text-semibold">
                                <p className="">S&P 500</p>
                                <p className="text-[#4ECDC4] font-medium">+1,45%</p>
                            </div>
                        </div>
                    </div>

                    <h1 className="mt-8 text-4xl text-white/90 mb-3 font-semibold tracking-tighter text-shadow-lg">Seu dinheiro sob controle<br/> sem complicação </h1>
                    <p className=" text-white/50 font-light mr-12 mb-10 text-shadow-lg">Faça parte da nossa comunidade e seja mais um a ter controle sobre gastos, investimentos e renda.</p>
                    <div className="rounded-xl border border-white/20 py-8 px-10 backdrop-blur-4xl bg-white/3 flex flex-col inset-shadow-sm shadow-2xl shadow-black/45">
                        <p className="text-white/60 text-sm font-light mb-1">Balanço Total</p>
                        <div className="flex flex-row justify-baseline items-center gap-2">
                            <h1 className="text-3xl font-semibold text-white/70 text-shadow-[90px]">R$12.550,45</h1>
                            <div className="flex flex-row items-center text-sm shadow-lg bg-[#1f624526] text-[#7dffa4] font-ligth border border-[#e2e2e20d] backdrop-blur-2xl px-3 p-1 rounded-full gap-1">
                                <FontAwesomeIcon className="text-[11px]" icon={faArrowUp} />
                                <p>12%</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-baseline">
                            <div className="w-10 h-8 bg-white/20 backdrop-blur-2xl rounded-t-lg border-white/20"></div>
                            <div className="w-10 h-12 bg-white/20 backdrop-blur-2xl rounded-t-lg border-white/20"></div>
                            <div className="w-10 h-18 bg-white/20 backdrop-blur-2xl rounded-t-lg border-white/20"></div>
                            <div className="w-10 h-16 bg-white/20 backdrop-blur-2xl rounded-t-lg border-white/20"></div>
                            <div className="w-10 h-14 bg-white/20 backdrop-blur-2xl rounded-t-lg border-white/20"></div>
                            <div className="w-10 h-12 bg-white/20 backdrop-blur-2xl rounded-t-lg border-white/20"></div>
                            <div className="w-10 h-24 bg-green-500/80 rounded-t-lg border-white/20"></div>
                        </div>
                    </div>
                </div>

            </main>
            
        </div>
    )
}

export default Cadastro;