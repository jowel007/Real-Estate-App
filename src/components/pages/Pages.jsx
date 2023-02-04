import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blog from '../blog/Blog';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import About from '../home/about/About';
import Home from '../home/Home';
import Services from '../home/services/Services';
import Pricing from "../pricing/Pricing"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
        <Router>
            <Header/>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path='/services' component={Services} />
                  <Route exact path='/blog' component={Blog} />
                  <Route exact path='/pricing' component={Pricing} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
                <Footer/>
        </Router>
    </>
  )
}

export default Pages