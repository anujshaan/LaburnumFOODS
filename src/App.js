import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/register"><Register/></Route>
          </Switch>

      </Router>
    </div>
  );
}

export default App;
