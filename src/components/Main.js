import React from 'react';

import { Modal, Button } from "react-bootstrap";

//import images
import Logo from '../images/Logo';

//stylesheet
import "../styles/sass/main.scss";

import axios from 'axios';

const swapiKeys = ['people', 'planets', 'starships'];

function getKeys(o) {
        let keys = [];
        for (let key in o) {
          keys.push(key);
        }
        return keys;
      }

function getValues(o) {
        let values = [];
        for (let value in o) {
          values.push(o[value]);
        }
        return values;
      }

class Swapis extends React.Component {
        constructor() {
          super();
          this.state = {
            swapis: [],
            swapi: {},
            showModal: false
          }
        }
        componentWillMount() {
          axios
            .get(`https://swapi.co/api/swapi/${this.props.kind}`)
            .then(response => {const swapis = response.data.results;
                               this.setState({ swapis });
                             })
        }
        getSwapiData(index, event) {
          event.preventDefault();
          let swapi = this.state.swapis[index];
          let data = {};
          let opening = '';
          for (let key in swapi) {
            if (!Array.isArray(swapi[key])) {
              switch (key) {
                case 'homeworld':
                case 'created':
                case 'edited':
                case 'url':
                  continue;
                default:
                  if (key === 'opening_crawl') {
                    opening = swapi[key];
                  } else {
                    data[key] = swapi[key];
                  }
                  break;
              }
            }
          }
          if (opening) {
            data['opening_crawl'] = opening;
          }
          this.setState({
            swapi: data,
            showModal: true
          });
        }

        render() {
          return (
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title" style={{textTransform: 'capitalize'}}>
                  {this.props.kind}
                </h3>
              </div>
              <ul className="list-group">
                {this.state.swapis.map((swapi, index) => {
                  return (
                    <a href="/" key={index} onClick={this.getSwapiData.bind(this, index)}>
                      <Swapi index={index} name={swapi.name || swapi.title}/>
                    </a>
                  )
                })}
              </ul>
              <Modal show={this.state.showModal}
                     name={this.state.swapi.name || this.state.swapi.title}>
              {this.state.swapi}
              </Modal>
            </div>
          );
        }
      }

const Swapi = (props) => (
        <li className="list-group-item">
          <span className="badge">{props.index}</span>
          {props.name}
        </li>
      );

const Stats = (props) => (
        <div className="row">
          <div className="col-xs-6">
            {getKeys(props.children).map((key, index) => <p key={index}>{key}</p>)}
          </div>
          <div className="col-xs-6">
            {getValues(props.children).map((value, index)=> <p key={index}>{value}</p>)}
          </div>
        </div>
      );

class BootstrapModal extends React.Component {
        constructor() {
          super();
          this.state = {
            showModal: true,
          }
        }
        componentWillReceiveProps(prop) {
          this.setState({ showModal: prop.show });
        }
        close() {
          this.setState({ showModal: false });
        }
        render() {
          return (
            <Modal show={this.props.show && this.state.showModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Stats>{this.props.children}</Stats>
              </Modal.Body>
              <Modal.Footer>
                <Button className="pull-right" onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
        }
      }

class Main extends React.Component{
  render(){
    return(
      <div className="container">
         <header className="header">
           <Logo />
          </header>
          <div className="row">
          {swapiKeys.map((kind, index) => (
              <div className="col-md-4" key={index}>
                <Swapis kind={kind}/>
              </div>
            )
          )}
          </div>
          <div className="tagline">
            Built and designed for Front-end Developer Test <a href="www.https://github.com/random-guys/swapi-frontend-developer-test/">on Github</a>,
            <a href="https://swapi.co/">using the starwars Api.</a>.
          </div>
      </div>
    );
  }
}
export default Main;
