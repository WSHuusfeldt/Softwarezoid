import React from 'react';
import { Switch, Route } from "react-router-dom";

// Managers
import URLSettings from './settings'

// Pages Import
import Header, { Footer } from './pages/HeaderFooter'
import LoginForm from './login/LoginForm';
import Data from './pages/Data';
import ProductDetails from "./pages/ProductDetails";
import FAQ from './pages/FAQ';
import Basket from './pages/Basket';
import Products from './pages/Products';
import Contact from "./pages/Contact";

// Animations
import { FadeInLeft, FadeInUp, Bounce } from './style/animations'


function App() {
  return (
    <div className="App">
        <Switch>
          {/* NO MORE ROUTES HERE!!!!  */}
          <Route exact path={URLSettings.getURL("Home")}> <HomeHeader /> </Route>
          <Route path={URLSettings.getURL("NoMatch")}> <Header /> </Route>
        </Switch>
        <main>
        <div className="container-fluid py-3 mt-5 pt-5 pb-5">
          <Switch>
            {/* NEW ROUTES GOES HERE!  */}
            <Route exact path={URLSettings.getURL("Home")}> <Home /> </Route>
            <Route path={URLSettings.getURL("Login")}> <LoginForm /> </Route>
            <Route path={URLSettings.getURL("Data")}> <Data /> </Route>
            <Route path={URLSettings.getURL("FAQ")}> <FAQ /> </Route>
            <Route path={URLSettings.getURL("Basket")}> <Basket /> </Route>
            <Route path={URLSettings.getURL("Products")}> <Products /> </Route>
            <Route path={URLSettings.getURL("ProductId", "id")}> <ProductDetails /> </Route>
            <Route path={URLSettings.getURL("Contact")}> <Contact /> </Route>
            <Route path={URLSettings.getURL("NoMatch")}> <NoMatch /> </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const NoMatch = () => <div>No match!</div>

//If Welcome function reaches about 10 lines of code place the function in separate file.
const HomeHeader = () => {
  return (
    <header id="home">
      <div className="overlay"></div>

      <Header />

      <div className="tophead">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <FadeInLeft><h1 className="title-main">Software <span>Zoid</span></h1></FadeInLeft>

              <FadeInUp><h3 className="subtitle-main">Lorem ipsum dolor sit amet
                            consectetur adipiscing elit <br /> proin leo leo ornare nec vulputate tempus velit nam id purus
                            tellus hendrerit mi dapibus.</h3></FadeInUp>

              <a href="#bestSeller" className="arrowDown">
                <Bounce><i className="fa fa-angle-down justify-content-center"></i></Bounce>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className="sesgoabajo"></div>
    </header>
  )
}

const Home = () => {
  return (
    <h1>Hello World!</h1>
  )
}

export default App;