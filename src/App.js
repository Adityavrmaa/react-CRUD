import './App.css';
import About from './component/pages/About';
import Home from "./component/pages/Home"
import Contact from "./component/pages/Contact"
import Navbar from "./component/layout/Navbar"
import Service from "./component/pages/Service"
import Errorpage from "./component/pages/Errorpage";
import Adduser from './component/user/Adduser';
import Edituser from './component/user/Edituser';
import ViewUser from './component/user/ViewUser';

import {BrowserRouter , Route, Switch} from "react-router-dom";


function App() {
  return (
   
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/user/adduser" component={Adduser}/>
         <Route exact path="/user/edituser/:id" component={Edituser}/>
         <Route exact path="/user/:id" component={ViewUser}/>
        <Route  component={Errorpage}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
