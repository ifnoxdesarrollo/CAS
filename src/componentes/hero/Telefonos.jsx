import React, { Component } from 'react';

class Telefonos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ currentTime: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        const dayOfWeek = new Date().getDay();

        let contentToRender = null;

        if (dayOfWeek === 0) {
            contentToRender = <p>Hoy es domingo.</p>;
        } else if (dayOfWeek === 1) {
            contentToRender = <p>Hoy es lunes.</p>;
        }


        const { currentTime } = this.state;
        const currentHour = currentTime.getHours();

        let content;
        if (dayOfWeek === 1 && currentHour > 12 && currentHour < 20) {
            content = "tel:+261666666";
        } else if (currentHour > 18 && currentHour < 22) {
            content = <div>segundo numero</div>;
        }

        return content;
    }
}

export default Telefonos;