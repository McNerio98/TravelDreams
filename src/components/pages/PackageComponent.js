import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class PackageComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container py-md-3 py-1">
                <HeaderComponent/>
                    <h3>Soy el contenido en pagina de paquetes</h3>
                <FooterComponent/>
            </div>
        )
    }
}

export default PackageComponent;