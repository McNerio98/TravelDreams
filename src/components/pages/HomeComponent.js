import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import PackagePreviewComponent from "../PackagePreviewComponent";
import { Link, Navigate } from "react-router-dom";
import { popularPackages } from '../../services';
import configApp from '../../configParams.json';
import banner from '../../img/banner1.jpg';
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { popularPackages: [], selected: 0 };
        //Vinculando el contexto
        this.getPopularPackages = this.getPopularPackages.bind(this);
    }

    getPopularPackages() {
        popularPackages().then(result => {
            const response = result.data;
            this.setState({ popularPackages: response.data });
        }).catch(ex => {

        });
    }

    componentDidMount() {
        this.getPopularPackages();
    }

    render() {
        return (
            <div className="container py-md-3 py-1">
                {this.state.selected != 0 && <Navigate replace to={"/packages?selected=" + this.state.selected} />}
                <HeaderComponent />

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-2">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="text-start display-5 fw-bold">Descubre aquí los lugares más increíbles</h1>
                                <p className="text-start fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap.</p>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Search</span>
                                    <input type="text" class="form-control" placeholder="Ejem. Cero Verde ..." aria-label="Ejem. Cero Verde ..."/>
                                </div>                                
                            </div>
                            <div className="col-md-4">
                                <img src={banner} className="bannerApp1" />
                            </div>
                        </div>

                    </div>
                </div>

                {/*Populars Packings Section*/}
                <div>
                    <h6>Paquetes</h6>
                    <div className="row">
                        {this.state.popularPackages.map((e) => (
                            <div className="col-md-2 col-lg-3 p-md-3">
                                <PackagePreviewComponent onSelected={(id) => { this.setState({ selected: id }) }} key={e.id} data={e} />
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

                <FooterComponent />
            </div>
        )
    }
}

export default HomeComponent;