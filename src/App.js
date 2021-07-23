import './App.css';
import UserList from './components/userList';
import UserForm from "../src/components/Form";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/form" component={UserForm} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
