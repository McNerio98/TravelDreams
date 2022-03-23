import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import PackagePreviewComponent from "../PackagePreviewComponent";
import { Link } from "react-router-dom";
import {popularPackages} from '../../services';
import configApp from '../../configParams.json';
class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {popularPackages: []};
        //Vinculando el contexto
        this.getPopularPackages = this.getPopularPackages.bind(this);
    }

    getPopularPackages(){
        popularPackages().then(result=>{
            const response = result.data;
            this.setState({popularPackages: response.data});
        }).catch(ex=>{

        });
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
                    {/*Populars Packings Section*/}
                    <div>
                        <h6>Paquetes</h6>
                        <div className="row">
                            {this.state.popularPackages.map((e)=>(
                                <div className="col-md-2 col-lg-3 p-md-3">
                                    <PackagePreviewComponent key={e.id} data={e} />
                                </div>
                            ))}
                        </div>

                        <div className="row border rounded-pill p-3">
                            <div className="col-md-8">
                                Tenemos muchos mas paquetes especialmente para ti
                            </div>
                            <div className="col-md-4">
                                <Link to={`/packages`} className="btn btn-success w-100">Ver todos</Link>
                            </div>                            
                        </div>
                    </div>


                    {/*Commercial Section*/}
                    <h6>Publicidad de comercio</h6>
                    {/*Marketing Section */}

                <FooterComponent/>
            </div>
        )
    }
}

export default HomeComponent;