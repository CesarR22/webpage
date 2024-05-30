import './Login.css';
import {Formulario} from '../../components/commons/Formulario/Formulario.jsx';
import {useState} from "react";

export function Login() {
    const [user, setUser] = useState([]);

    return (
        <div className="page">
            <Formulario setUser={setUser}/>
        </div>
    );
}