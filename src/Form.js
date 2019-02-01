import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            name: '',
            rpgClass: ''
        };

        this.state = this.initialState;
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render(){
        const {name, rpgClass} = this.state;

        return (
            <form>
                <label>Name </label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                    <br/>
                <label>Class </label>
                <input
                    type="text"
                    name="rpgClass"
                    value={rpgClass}
                    onChange={this.handleChange} />
                    <br/>
                <input 
                    type="button"
                    value="submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;