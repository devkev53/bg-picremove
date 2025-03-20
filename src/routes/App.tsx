import { Router, Route } from "wouter";
// Pages
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Upload from '../pages/Upload'
import About from '../pages/About'
import Effects from '../pages/Effects'

const App = () => {
  return (
    <Layout>
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/upload-effects" component={Effects}/>
        <Route path="/about" component={About}/>
      </Router>
    </Layout>
  );
}

export default App;