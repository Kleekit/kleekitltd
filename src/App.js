import "./index.css";
import "./bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Team from "./Pages/Team";
import StartProject from "./Pages/StartProject";
import Abbie from "./Pages/Abbie";
import Tega from "./Pages/Tega";
import Martins from "./Pages/Martins";
import Collins from "./Pages/Collins";
import Lead from "./Pages/Lead";
import Ceo from "./Pages/Ceo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/team" exact component={Team} />
        <Route path="/start" exact component={StartProject} />
        <Route path="/abbie" exact component={Abbie} />
        <Route path="/tega" exact component={Tega} />
        <Route path="/martins" exact component={Martins} />
        <Route path="/collins" exact component={Collins} />
        <Route path="/ekama" exact component={Lead} />
        <Route path="/kay" exact component={Ceo} />
      </Switch>
    </div>
  );
}

export default App;
