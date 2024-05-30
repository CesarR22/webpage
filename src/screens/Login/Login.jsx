import './Login.css';
import {useState} from 'react';
import googlelogo from '../../assets/googlelogo.png';

export function Login() {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Verificar campos vacíos
        if (usuario === "" || contraseña === "") {
            setError("Por favor, complete todos los campos.");
            return;
        }
        setError(false)
    };

    return (
        <section className="page">
            <h1>Inicio</h1>

            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    className="usuario"
                    placeholder="Usuario"
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <input
                    className="contraseña"
                    placeholder="Contraseña"
                    type="password"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />
                <button className="btniniciar">
                    Iniciar sesion
                </button>
                <button className="btngoogle">
                    <img src={googlelogo}/>
                    Iniciar sesión con Google
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </section>
    );
}