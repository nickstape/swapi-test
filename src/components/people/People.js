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


      }
    }

  componentDidMount = () => {
      const { getPeople } = this.props;
      getPeople();
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
    if(this.props.people.results.length > 0)
      return this.props.people.results.map((person, data) => {
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
            <input type="text" placeholder="Search..."/>
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
