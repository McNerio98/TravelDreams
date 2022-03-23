import React from "react";
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
        let map = tt.map({
            key: configApp.KEY_MAPS,
            container: this.refMaps.current,
            center: [4.890659, 45.373154],
            dragPan: !isMobileOrTablet(),
            zoom: 10
        });
        this.setState({map: map});  
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={configApp.IMG_URL + "/" + this.props.data.path_img} className="w-100"/>
                    </div>
                    <div className="col-md-8">
                        <div ref={this.refMaps} className="mapTomTomDiv">

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h5>{this.props.data.name}</h5>
                        $ {this.state.price}
                        <div class="row">
                            <div className="d-flex justify-content-between border">
                                <button className="w-100 btn btn-success" onClick={this.countRes}>-</button>
                                <span className="w-100">{this.state.count}</span>
                                <button className="w-100 btn btn-success"  onClick={this.countSum}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p>{this.props.data.addess}</p>
                        <p>{this.props.data.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PackagesComponent;