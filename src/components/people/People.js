import React from "react";
//import components
import {  Table } from "react-bootstrap";
import { getPeople } from './peopleThunk';
import { fetchItemsIfNeeded } from './peopleActions';
import Search from '../components/Search';

class People extends React.Component{
  constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         people: [
           {getPeople}
         ]
      }
   }
   renderTableHeader() {
         let header = Object.keys(this.state.people[0])
         return header.map((key, index) => {
            return <thread key={index}>{key}</thread>
         })
      }
    renderTableData() {
      return this.state.people.map((people, index) => {
         const { id, fullname, birthyear, gender } = people //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{fullname}</td>
               <td>{birthyear}</td>
               <td>{gender}</td>
            </tr>
         )
      })
   }
   componentDidMount() {
   const { dispatch, searchStr } = this.props;
   dispatch(fetchItemsIfNeeded(searchStr));
 }

 handleChange(searchStr) {
   this.props.dispatch(fetchItemsIfNeeded(searchStr));
 }
  render(){
    return(
     <div>
      <Search value={searchStr} onChange={this.handleChange} />
       <Table id='people'>
         <thead>
           <tr>
             {this.renderTableHeader()}
           </tr>
         </thead>
         <tbody>
          <tr>
           {this.renderTableData()}
          </tr>
         </tbody>
       </Table>
     </div>
    );
  }
}

export default People;
