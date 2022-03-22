import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

import {popularPackages} from '../../services';

class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {popularPackages: []}
    }

    getPopularPackages(){
        console.log("Realizando llamada despues de montarse");
    }

    componentDidMount(){
        this.getPopularPackages();
    }

    render(){
        return (
            <div className="container py-md-3 py-1">
                <HeaderComponent/>
                    <div className="row">
                        <div className="col-md-7">
                            Descubre aquí los lugares más increíbles
                        </div>
                        <div className="col-md-5">
                            content
                        </div>                        
                    </div>
                    {/*Packings Section*/}

                    {/*Commercial Section*/}

                    {/*Marketing Section */}

                    <h3>Soy el contenido en pagina de inicio</h3>
                <FooterComponent/>
            </div>
        )
    }
}

export default HomeComponent;