import React from "react";
import { Link } from "react-router-dom";
import configApp from '../configParams.json';

class PackagePreviewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.emitSelected = this.emitSelected.bind(this);
    }

    emitSelected(){
        this.props.onSelected(this.props.data.id);
    }

    render() {
        return (
            <div className="card">
                <div className="bg-dark container-embed-img" >
                    <img src={configApp.IMG_URL + '/' + this.props.data.path_img} className="adap-img-event" style={{ width: "100%" }} />
                </div>
                <div className="card-body pt-0">
                    <p className="text-start m-0">{this.props.data.name}</p>
                    <p className="text-start text-secondary">{this.props.data.address}</p>
                </div>
                <div className="card-footer">
                    <button className="text-decoration-none text-dark btn btn-light w-100" onClick={this.emitSelected}>Ver paquete</button>
                </div>
            </div>
        )
    }
}

export default PackagePreviewComponent;