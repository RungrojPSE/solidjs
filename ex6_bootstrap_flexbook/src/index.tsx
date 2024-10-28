/* @refresh reload */
import { render } from 'solid-js/web'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
// import "bootstrap";
import './index.scss'

import App from './App'



const root = document.getElementById('root')
// render(() => <App />, root!)

render(
  () => (
    <App />
  ),
  root!
);


// render(
//   () => (
//       <Router>
//           <Route path="/" component={Home} />
//           <Route path="/hello-world" component={() => <h1>Hello World!</h1>} />
//           <Route path="/about" component={About} />
//       </Router>
//   ),
//   document.getElementById("root") as HTMLElement
// );