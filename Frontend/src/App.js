import React from 'react';
import { Switch, Route } from "react-router-dom";

// Managers
import URLSettings from './settings'

// Pages Import
import Header, { HomeHeader, Footer } from './pages/HeaderFooter'
import LoginForm from './login/LoginForm';
import ProductDetails from "./pages/ProductDetails";
import FAQ from './pages/FAQ';
import Basket from './pages/Basket';
import Products from './pages/Products';
import Contact from "./pages/Contact";
import Home from './pages/Home'
import Inquiry from './pages/Inquiry'
import ContactDetails from './pages/ContactDetails';


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
            <Route path={URLSettings.getURL("FAQ")}> <FAQ /> </Route>
            <Route path={URLSettings.getURL("Basket")}> <Basket /> </Route>
            <Route path={URLSettings.getURL("Products")}> <Products /> </Route>
            <Route path={URLSettings.getURL("ProductId", "id")}> <ProductDetails /> </Route>
            <Route path={URLSettings.getURL("Contact")}> <Contact /> </Route>
            <Route path={URLSettings.getURL("Inquiry")}> <Inquiry /> </Route>
            <Route path={URLSettings.getURL("InquiryDetails", "id")}> <ContactDetails /> </Route>
            <Route path={URLSettings.getURL("NoMatch")}> <NoMatch /> </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </div >
  )
}

const NoMatch = () => <div>No match!</div>

export default App;
