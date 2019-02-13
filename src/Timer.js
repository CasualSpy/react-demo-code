import React, {Component, Fragment} from 'react'

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date()
        };
    }

    tick() {
        this.setState(state => ({time: new Date()}));
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <Fragment>
                {this.state.time.toLocaleTimeString()}
            </Fragment>
        );
    }
}

export default Timer;