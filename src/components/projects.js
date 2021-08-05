import React from 'react'
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
  return (

    <div className='row'><h3>Projects</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Filename</th>
            <th scope="col">Elements</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

          {projects.map((projects, id) => (
            <tr key={id.toString()}>
              <th scope="row">{projects.id}</th>
              <td>{projects.title}</td>
              <td>{projects.dataCount}</td>
              <td><Link className='btn btn-primary btn-sm' to={`project/${projects.id}`}>Detail</Link></td>
            </tr>


          ))}
        </tbody>
      </table>
    </div>

  )
};

export default Projects
