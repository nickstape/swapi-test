import React from "react";
//import components
import { connect } from 'react-redux';
import {  Table } from "react-bootstrap";
import { getStarships } from './starshipsThunk';

//stylesheet
import "../../styles/sass/body.scss";

class Starships extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         starships: false,
         planets: false,
         search: '',
         setSearch: false

      }
    }

    componentDidMount = () => {
      const { getStarships } = this.props;
      getStarships();
    }
    handleChange=(e)=>{
      this.setState({ [e.target.name]: e.target.value })
    };

    onSearch = (e) => { this.setState({ setSearch: true}) }


    renderTableData() {
      let { starships } = this.props;
      let results = starships.results;
      let { setSearch, search } = this.state;
       try {
         const searchRE = new RegExp(search, 'i');
         if(setSearch) {
           results = starships.results.filter(starship => {
             return starships.name.match(searchRE)})
           }
         }
         catch(err){ console.log(err) }
       if(results.length > 0)
        return results.map((starship, data) => {
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
      <input type="text"  name='search' value={this.state.search} onChange={this.handleChange}  placeholder='search by name, gender or sex' onKeyDown={(e) => this.onSearch(e)} />
       <div className="search"></div>
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
