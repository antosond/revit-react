
import Projects from '../components/projects'
import React, { Component } from 'react'

class Home extends Component {

    state = {
        projects: []
      }

    componentDidMount() {
        fetch('/api/Projects/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ projects: data })
            })
            .catch(console.log);
    }

    render() {
        return (
            <div class="row">
                <Projects projects={this.state.projects} />
            </div>
        );
    }

}
export default Home;
