import React from "react";
//import components
import { connect } from 'react-redux';
import {  Table, InputGroup, FormControl } from "react-bootstrap";
import { getStarships } from './starshipsThunk';

//stylesheet
import "../../styles/sass/body.scss";

class Starships extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         starships: false,

      }
    }

    componentDidMount = () => {
      const { getStarships } = this.props;
      getStarships();
    }
    renderTableData() {
      if(this.props.starships.results.length > 0)
        return this.props.starships.results.map((starship, data) => {
         const { id, name, model, cargo_capacity } = starship //destructuring
         return (
            <tr key={data}>
               <td>{starship.id}</td>
               <td>{starship.name}</td>
               <td>{starship.model}</td>
               <td>{starship.cargo_capacity}</td>
            </tr>
         )
      })
   }
  render(){
    const  { starships } = this.props;

    return(
     <div className="container">
          <div className="search-bar">
                <InputGroup className="mb-3">
                  <FormControl placeholder="Search By" aria-describedby="basic-addon1"/>
              </InputGroup>
          </div>
            {starships.count ?
         <div className="body-container">
           <Table  responsive striped bordered hover>
             <thead>
               <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Model</th>
                 <th>Cargo Capacity</th>
               </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
           </tbody>
           </Table>
       </div>
       :
       <p>loading</p>
     }
     </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    loading: state.reducer.loading,
    starships: state.reducer.starships,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStarships: () => dispatch(getStarships()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Starships);
