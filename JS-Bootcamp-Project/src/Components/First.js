import React from "react";

export default class Search extends React.Component {

    state = {
        input: ''
    }

    onChange = text => {
        this.setState({
            input: text.target.value
        });
    }

    onSubmit = text => {
        text.preventDefault();
        
    }

    render() {
        return (
            <form>
                <div className= "input-group mb-3">
                    <input type="text" placeholder="Search..." className="form-control"></input>
                    <div className="input-group-append">
                        <button className="btn btn-success" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        )
    }
}