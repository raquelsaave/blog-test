import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';

// Components
import logotipo from './blog.png'

// Estilos
import './Logo.css';

class Logo extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log(this.props.location.pathname)
    }

    validation(){

        let destino = '/Main';
        if(this.props.location.pathname == "/")
        {
            destino="/";
        }
        return (
            <div className="logo">
                <Link to = {destino}>
                    <img src={logotipo} alt={"logo"} width={"70px"} />
                </Link>
            </div>
        )
    }

    render() {
        return this.validation();
        }
}

export default withRouter(Logo);