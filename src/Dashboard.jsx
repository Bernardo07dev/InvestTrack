const Dashboard = () => {

    const idUsuario = localStorage.getItem('userId');
    const emailUsuario = localStorage.getItem('userEmail');
    const nomeUsuario = localStorage.getItem('userNome');

    console.log(idUsuario);

    return(
        <h1>Id {idUsuario} - Email {emailUsuario} - Nome {nomeUsuario}</h1>
    )
}

export default Dashboard;