import React from "react";
import { Switch, Route } from "react-router"; 
import Header from "./components/Header"
import Total from "./components/total/Total"
import Federal from "./components/federal/Federal"
import {Card} from "react-bootstrap"



function App() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Header/>
        </Card.Header>
        <Card.Body>
          <Switch>
          <Route path="/federal">
            <Federal/>
          </Route>
          <Route path="/">
            <Total/>
          </Route>
        </Switch>
        </Card.Body>
      </Card>

      
     
    </div>
  );
}

export default App;
