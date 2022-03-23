import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link to={`/`} className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Travel And Dreams</span>
                </Link>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link to={`/`} className="me-3 py-2 text-dark text-decoration-none">Inicio</Link>
                    <Link to={`/packages`} className="me-3 py-2 text-dark text-decoration-none">Paquetes</Link>
                    <Link to={`/about`} className="me-3 py-2 text-dark text-decoration-none">Nosotros</Link>
                </nav>
            </div>
        )
    }
}

export default HeaderComponent