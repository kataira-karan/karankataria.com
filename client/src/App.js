import "./App.css";

import Navigation from "./component/Navigation/Navigation";
import LandingPage from "./component/LandingPage/LandingPage";
import AboutMe from "./component/AboutMe/AboutMe";
import Project from "./component/Projects/Project";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <LandingPage></LandingPage>
      <AboutMe></AboutMe>
      <Project></Project>
    </div>
  );
}

export default App;
