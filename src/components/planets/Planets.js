import React from "react";
//import components
import { connect } from 'react-redux';
import {  Table } from "react-bootstrap";
import { getPlanets } from './planetsThunk';


//stylesheet
import "../../styles/sass/body.scss";



class Planets extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         planets: false,
         search: '',
         setSearch: false
      }
    }

  componentDidMount = () => {
      const { getPlanets } = this.props;
      getPlanets();
    }

    handleChange=(e)=>{
      this.setState({ [e.target.name]: e.target.value })
    };

    onSearch = (e) => { this.setState({ setSearch: true}) }


  renderTableData() {
    let { planets } = this.props;
    let results = planets.results;
    let { setSearch, search } = this.state;
     try {
       const searchRE = new RegExp(search, 'i');
       if(setSearch) {
         results = planets.results.filter(planet => {
           return planet.name.match(searchRE)})
         }
       }
       catch(err){ console.log(err) }
    if(results.length > 0)
      return results.map((planet, data) => {
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
      <input type="text"  name='search' value={this.state.search} onChange={this.handleChange}  placeholder='search by name, gender or sex' onKeyDown={(e) => this.onSearch(e)} />
       <div className="search"></div>
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
