import React from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from "@tomtom-international/web-sdk-maps";
import configApp from '../configParams.json';
import isMobileOrTablet from './maps/mobile';
class PackagesComponent extends React.Component {
    constructor(props){
        super(props);
        this.refMaps = React.createRef();
        this.state = {map: {},count: 1,price: 0};
        this.countSum = this.countSum.bind(this);
        this.countRes = this.countRes.bind(this);
    }

    countSum(){
        var current = this.state.count + 1;
        this.setState({count: current});
        this.setState({price: (this.props.data.price * current)});
    }

    countRes(){
        var current = this.state.count - 1;
        if((this.state.count - 1 ) > 0){
            this.setState({count: current});
            this.setState({price: (this.props.data.price * current)});
        }
    }

    componentDidMount(){
        this.setState({price: this.props.data.price});
        this.refreshMap();
    }

    refreshMap(){
        const coors = [this.props.data.lng,this.props.data.lat];
        let map = tt.map({
            key: configApp.KEY_MAPS,
            container: this.refMaps.current,
            center: coors,
            dragPan: !isMobileOrTablet(),
            zoom: 10
        });
        map.addControl(new tt.FullscreenControl);
        map.addControl(new tt.NavigationControl);

        var marker = new tt.Marker({
            draggable: true
        }).setLngLat(coors).addTo(map);
        this.setState({map: map});  
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 order-md-2">
                        <div ref={this.refMaps} className="mapTomTomDiv">
                        </div>
                    </div>                    
                    <div className="col-md-4 order-md-1">
                        <img src={configApp.IMG_URL + "/" + this.props.data.path_img} className="w-100"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h5>{this.props.data.name}</h5>
                        $ {this.state.price}
                        <div className="row">
                            <div className="d-flex justify-content-between border">
                                <button className="w-100 btn btn-success" onClick={this.countRes}>-</button>
                                <span className="w-100">{this.state.count}</span>
                                <button className="w-100 btn btn-success"  onClick={this.countSum}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p>{this.props.data.address}</p>
                        <p>{this.props.data.description}</p>
                        <div className="text-end">
                            <button className="btn btn-primary">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PackagesComponent;