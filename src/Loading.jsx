const Loading = () => {
    return(
        <div className="h-screen flex flex-col gap-6 justify-center items-center text-black">
            <div 
                className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-gray-500 animate-[spin-smooth_0.9s_linear_infinite]">
            </div>
            <h1 className="text-sm font-medium text-gray-600">Carregando...</h1>
        </div>
    )
}

export default Loading;
