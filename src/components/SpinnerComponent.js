import React from "react";

class SpinnerComponent extends React.Component{
    render(){
        return (
            <div className="text-center p-md-4">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}

export default SpinnerComponent;