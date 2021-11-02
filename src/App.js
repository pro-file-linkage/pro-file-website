
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import CurrentUserProfile from "./components/CurrentUserProfile";
import DetailProfiler from "./components/DetailProfiler";
import Login from "./components/Login";


function App() {
  const isLogggedIn = localStorage.getItem("user");

  console.log(isLogggedIn);
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route exact path="/profile" component={CurrentUserProfile} />
        <Route exact path="/profilerDetails" component={DetailProfiler} />
      </div>
    </Router>
  );
}

export default App;
