import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class AboutComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container py-md-3 py-1">
                <HeaderComponent/>
                    <h3>Acerca de la empresa</h3>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                <FooterComponent/>
            </div>
        )
    }
}

export default AboutComponent;