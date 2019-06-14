import React from "react";
//import components
import { connect } from 'react-redux';
import {  Table, InputGroup, FormControl } from "react-bootstrap";
import { getPlanets } from './planetsThunk';

import Spinner from '../../components/Spinner';

//stylesheet
import "../../styles/sass/body.scss";

function cellFormatter(cell) {
    return (!cell ? <Spinner /> : `${cell}`);
}

class Planets extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         planets: false,

      }
    }

  componentDidMount = () => {
      const { getPlanets } = this.props;
      getPlanets();
    }
  keyPress(e){
    if(e.keyCode === "enter"){
         this.setState({
             loading: true
         });
         this.setState({
             searchQuery:e.target.value
         })
  };
}


  renderTableData() {
    if(this.props.planets.results.length > 0)
      return this.props.planets.results.map((planet, data) => {
          const { id, name, climate, population } = planet //destructuring
          return (
            <tr key={data}>
               <td>{planet.id}</td>
               <td>{planet.name}</td>
               <td>{planet.climate}</td>
               <td>{planet.population}</td>
            </tr>
         )
        })
    }



  render(){
    const  { planets } = this.props;


    return(
     <div className="container">
          <div className="search-bar">
                <InputGroup className="mb-3" onKeyDown={(e)=>{this.keyPress(e)}}>
                  <FormControl placeholder="Search By" aria-describedby="basic-addon1"/>
              </InputGroup>
          </div>
            {planets.count ?
         <div className="body-container">
           <Table responsive  bordered hover>
             <thead >
               <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Climate</th>
                 <th>Population</th>
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
  return {
    loading: state.reducer.loading,
    planets: state.reducer.planets,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlanets: () => dispatch(getPlanets()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Planets);
