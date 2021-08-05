import React, { Component } from 'react'
import Table from '../components/table'
class Project extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
    }

    render() {

        return (
                <Table index={this.id} />
        );
    }

}
export default Project; 
