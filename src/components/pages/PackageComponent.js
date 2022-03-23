import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import PackageAddComponent from '../PackageAddComponent';
import { getPackageInfo, getAllPackages,getPackagesByCategory } from '../../services';
import PackagePreviewComponent from "../PackagePreviewComponent";
import SpinnerComponent from "../SpinnerComponent";

class PackageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idSelected: 0,
            selected: null,
            packages: [],
            filterSelected: 0,
            loaders: {S1:false,S2: false}
        };

        this.filterResults = this.filterResults.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
    }

    componentDidMount() {
        //Optional params was remove in v6 react route dom
        var cur_selected = (new URLSearchParams(window.location.search)).get("selected");
        if (cur_selected != null) {
            this.setState({ idSelected: cur_selected });
            this.getPackage(cur_selected);
        }

        this.filterResults();
    }

    changeSelected(id){
        //clean 
        this.setState({selected: null});
        this.setState({ idSelected: id });
        this.getPackage(id);
        window.scrollTo(0, 0);
    }

    changeFilter(event){
        this.setState({filterSelected: event.target.value});
        this.filterResults(event.target.value);
    }

    filterResults(filter = 0){
        if(filter == 0){
            this.getAll();
        }else{
            this.getByCategory(filter);
        }
    }

    getByCategory(id){
        this.setState({loaders: {S2: true}});
        getPackagesByCategory(id).then(result=>{
            const response = result.data;
            this.setState({ packages: response.data });
        }).catch(ex=>{
            //Manejar exception 
        }).finally(e=>{
            this.setState({loaders: {S2: false}});
        })
    }

    getAll() {
        this.setState({loaders: {S2: true}});
        getAllPackages().then(result => {
            const response = result.data;
            this.setState({ packages: response.data });
        }).catch(ex => {
            //Manejar exception 
        }).finally(e=>{
            this.setState({loaders: {S2: false}});
        })
    }

    getPackage(id) {
        this.setState({loaders: {S1: true}});
        //Validar idSelected diferente de 0 
        getPackageInfo(id).then(result => {
            const response = result.data;
            this.setState({ selected: response.data });
        }).catch(ex => {
            //Manejaar error aqui

        }).finally(e=>{
            this.setState({loaders: {S1: false}});
        })
    }

    render() {
        return (
            <div className="container py-md-3 py-1">
                <HeaderComponent />
                {this.state.loaders.S1 &&<SpinnerComponent/>}
                {this.state.selected &&
                    <PackageAddComponent data={this.state.selected} />
                }

                <div className="row mt-md-4 border-top border-3">
                    <div className="col-md-8">
                        <h5>Paquetes Recomendados</h5>
                    </div>
                    <div className="col-md-4">
                        <div>Filtro por categoria</div>
                        <select className="form-select form-select-lg mb-3" onChange={this.changeFilter} value={this.state.filterSelected}>
                            <option value="0">Todos</option>
                            <option value="1">Amigos</option>
                            <option value="2">Pareja</option>
                            <option value="3">Familiar</option>
                        </select>                        
                    </div>                
                </div>
                


                <div className="row">
                    {this.state.loaders.S2 &&<SpinnerComponent/>}
                    {!this.state.loaders.S2 && this.state.packages.map((e) => (
                        <div className="col-md-2 col-lg-3 p-md-3">                           
                            <PackagePreviewComponent  onSelected={this.changeSelected} key={e.id} data={e} />
                        </div>
                    ))}
                </div>

                <FooterComponent />
            </div>
        )
    }
}

export default PackageComponent;