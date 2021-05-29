import './App.css';
import Index from './Components/Index';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Switch>
      <Route exact path='/' component={Index}/>
      </Switch>

    </div>
  );
}

export default App;
