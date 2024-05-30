import './Formulario.css'
import {useState} from 'react';

export function Formulario() {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Verificar campos vacíos
        if (usuario === "" || contraseña === "") {
            setError("Por favor, complete todos los campos.");
            return;
        }
        setError(false)
    };

    return (
        <section>
            <h1>Inicio</h1>

            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    placeholder="Usuario"
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <input
                    placeholder="Contraseña"
                    type="password"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />
                <button>
                    Iniciar sesion
                </button>
                <button>
                    Iniciar sesión con Google
                </button>
            </form>

            {error && <p className="error">{error}</p>}
        </section>
    );
}