import React from "react";
//import components
import { connect } from 'react-redux';
import {  Table, InputGroup, FormControl } from "react-bootstrap";
import { getPeople } from './peopleThunk';



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
    renderTableData() {
      return this.props.people.results.map((person, index) => {
         const { id, name, birth_year, gender } = person //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{birth_year}</td>
               <td>{gender}</td>
            </tr>
         )
      })
   }
  render(){
    const  { people } = this.props;
    console.log("people", people);
    return(
     <div>
          <div>
                <InputGroup className="mb-3">
                  <FormControl placeholder="Search By" aria-describedby="basic-addon1"/>
              </InputGroup>
          </div>
            {people.count ?
         <div className="table-body">
           <Table id='people'>
             <thead>
               <tr>
                 <th>Id</th>
                 <th>FullName</th>
                 <th>Birth Year</th>
                 <th>Gender</th>
               </tr>
            </thead>
            <tbody>
              <tr>
              {this.renderTableData()}
              </tr>
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
    people: state.reducer.people,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);
