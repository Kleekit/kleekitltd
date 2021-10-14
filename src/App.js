
import './index.css';
import './bootstrap.css';
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Team from './Pages/Team';
import StartProject from './Pages/StartProject';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/team" exact component={Team} />
      <Route path="/start" exact component={StartProject} />
    </Switch> 
  </div>
  );
}

export default App;
