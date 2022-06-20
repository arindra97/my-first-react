import React from "react";

class ButtonClass extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    // membuat tampilannya
    render(){ 
        return <button>{this.props.text}</button>
    }
}

export default ButtonClass;