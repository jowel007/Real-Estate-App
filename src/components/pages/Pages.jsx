import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from '../common/header/Header';
import Home from '../home/Home';

const Pages = () => {
  return (
    <>
        <Router>
            <Header/>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
        </Router>
    </>
  )
}

export default Pages