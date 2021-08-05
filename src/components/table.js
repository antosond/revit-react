import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import React, { Component } from 'react'

const columns = [
  { field: 'id', headerName: 'ID', width: '80' },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'categoryLocalizedName', headerName: 'Category', width: 250 },
  { field: 'categoryEnumName', headerName: 'Category', width: 250 },
];

class Table extends Component {

  constructor(props) {

    super(props);
   this.id = props.index;

    this.state = {
      project: []
    }
  }

  componentDidMount() {
    fetch('/api/Projects/' + this.id)
      .then(res => res.json()).then(
        json => {
          this.setState({ title: json.title });
          var categories = {};
          json.data.map((element) => {
            if (typeof categories[element.categoryLocalizedName] == "undefined") {
              categories[element.categoryLocalizedName] = [];
            }
            categories[element.categoryLocalizedName].push(element);

          });
          return categories;
        }
      )
      .then((data) => {

        this.setState({ project: data });

      })
      .catch(console.log);
      
  }
  // 



  render() {
    
    return (

      
      <div className="row" style={{ height: '100vh', width: '100%' }}>
        <h4>{this.state.title}</h4>
        <div class="accordion" id="accordionFlushExample">
          {Object.keys(this.state.project).map((categoryName, id) => (
            <div className="accordion-item" key={"gr_" + id}>
              <h2 className="accordion-header" id={"flush-heading_" + id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse_" + id} aria-expanded="false" aria-controls={"flush-collapse_" + id}>
                  {categoryName}
                </button>
              </h2>
              <div id={"flush-collapse_" + id} class="accordion-collapse collapse" aria-labelledby={"flush-heading_" + id} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <div style={{ height: '400px', width: '100%' }}>

                    <DataGrid pageSize={10} rowHeight={28} rows={this.state.project[categoryName]} columns={columns} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Table
