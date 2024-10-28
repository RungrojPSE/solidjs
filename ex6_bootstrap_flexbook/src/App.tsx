import { Router, Route, A } from "@solidjs/router";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// import Home from './pages/Home';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

// https://docs.solidjs.com/solid-router/concepts/layouts

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};

export default App;
