import React, { Component, Fragment } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

import Map from '../components/covidEcMap/CovidEcMap' 
import Title from '../components/Title';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';

class Inicio extends Component {
  render(){
    return (
      <Fragment>
        <div className="columns">
          <div className="column is-2">
             <div style = {{margin: `0 -24px 0 0`}}>
              <Title></Title>
              <div style = {{margin: `20px 0 0 0`}}>
                <SideMenu></SideMenu>
              </div>
             </div>
          </div>
          <div className="column">
            <Map></Map>
          </div>
          <div className="column is-2">
             <div style = {{margin: `0 0 0 -24px`}}>
              <Title></Title>
              <div style = {{margin: `20px 0 0 0`}}>
                <SideMenu></SideMenu>
              </div>
             </div>
          </div>
        </div>
        <div style = {{margin: `-24px 0 0 0`}}>
          <Footer></Footer>
        </div>
      </Fragment>
    )
    // <Map/>
  }
}

export default Inicio