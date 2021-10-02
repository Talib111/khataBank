import './App.css';
import './styles/card.css'
import './styles/table.css'
import './styles/header.css'
import './styles/floatbtn.css'
import './styles/sidepanel.css'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import TableCard from './components/TableCard'
import {BrowserRouter,Route,Switch} from'react-router-dom'
import FloatBtn from './components/FloatBtn';
import Customer from './components/Customer';
import NewCus from './components/NewCus';
import Gave from './components/Gave';
import EachTran from './components/EachTran';
import Card from './components/Card';
import Landing from './components/Landing'


function App() {

  console.log('app.js rendered')
  
  return (

    <BrowserRouter>
    <>
     <Nav/>

     {/* <FloatBtn/> */}
    
    <Switch>
      <Route exact path='/'>
      <Landing/>
      </Route>

      <Route path='/panel'>
     <Dashboard/>
      </Route>

      <Route path='/customer'>
        <Customer/>
      </Route>
      <Route path='/add'>
        <NewCus/>
      </Route>
      <Route path='/gave'>
        <Gave/>
      </Route>
      <Route path='/trans'>
        <EachTran/>
      </Route>
      <Route path='/cards'>
        <Card/>
      </Route>
     
     

    </Switch>
     
    </>
    </BrowserRouter>
  );
}

export default App;
