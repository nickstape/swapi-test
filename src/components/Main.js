import React from 'react';
import { connect } from 'react-redux';

//actions
import { getPeople } from './people/peopleThunk';
import { getPlanets } from './planets/planetThunk';
import { getStarships } from './starships/starshipThunk';

//import components
import { Card, Button, CardColumns } from "react-bootstrap";

//import images
import Logo from '../images/Logo';

//stylesheet
import "../styles/sass/main.scss";
import "../styles/sass/breakpoints.scss";

class Main extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
      showInfo: false,
   }
 }

  render(){
    const { getPeople } = this.props;
    const { getPlanets } = this.props;
    const { getStarships } = this.props;
    return(
      <div className="container">
           <header className="header">
              <Logo />
          </header>
          <CardColumns>
               <Card bg="info">
                 <Card.Body>
                    <Card.Title>People</Card.Title>
                    <Button className="btn-style" onClick={() => getPeople()} >Go somewhere</Button>
                 </Card.Body>
              </Card>
               <Card bg="danger">
              <Card.Body>
                <Card.Title>Planets</Card.Title>
                 <Button className="btn-style" onClick={() => getPlanets()}>Go somewhere</Button>
              </Card.Body>
             </Card>
             <Card bg="warning">
              <Card.Body>
                <Card.Title>Starships</Card.Title>
                 <Button className="btn-style" onClick={() => getStarships()}>Go somewhere</Button>
              </Card.Body>
             </Card>
          </CardColumns>
         <div className="tagline">
            Built and designed for Front-end Developer Test <a href="www.https://github.com/random-guys/swapi-frontend-developer-test/">on Github</a>,
            <a href="https://swapi.co/">using the starwars Api.</a>.
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.reducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople()),
    getPlanets: () => dispatch(getPlanets()),
    getStarships: () => dispatch(getStarships()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
