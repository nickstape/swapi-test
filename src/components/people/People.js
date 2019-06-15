import React from "react";
//import components
import { connect } from 'react-redux';
import {  Table } from "react-bootstrap";
import { getPeople } from './peopleThunk';

import Spinner from '../../components/Spinner';

//stylesheet
import "../../styles/sass/body.scss";

function cellFormatter(cell) {
    return (!cell ? <Spinner /> : `${cell}`);
}

class People extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         people: false,
         search: '',
         setSearch: false

      }
    }

  componentDidMount = () => {
      const { getPeople } = this.props;
      getPeople();
    }
  handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })
  };

  onSearch = (e) => { this.setState({ setSearch: true}) }

  renderTableData() {
    let { people } = this.props;
    let results = people.results;
    let { setSearch, search } = this.state;
     try {
       const searchRE = new RegExp(search, 'i');
       if(setSearch) {
         results = people.results.filter(person =>
           (person.name.match(searchRE) || person.gender === search//after string has been fully typed
       ))

     }}
       catch(err){ console.log(err) }
    if(results.length > 0)
      return results.map((person, data) => {
          const { id, name, birth_year, gender } = person //destructuring
          return (
            <tr key={data}>
               <td>{person.id}</td>
               <td>{person.name}</td>
               <td>{person.birth_year}</td>
               <td>{person.gender}</td>
            </tr>
         )
        })
    }



  render(){
    const  { people } = this.props;
    return(
     <div className="container">
          <div className="search-bar">
           <input type="text"  name='search' value={this.state.search} onChange={this.handleChange}  placeholder='search by name, gender or sex' onKeyDown={(e) => this.onSearch(e)} />
            <div className="search"></div>
          </div>
            {people.count ?
         <div className="body-container">
           <Table responsive striped bordered hover>
             <thead >
               <tr>
                 <th>Id</th>
                 <th>FullName</th>
                 <th>Birth Year</th>
                 <th>Gender</th>
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
    people: state.reducer.people,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);
