import { Router, Route } from "wouter";
// Pages
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Upload from '../pages/Upload'
import About from '../pages/About'

const App = () => {
  return (
    <Layout>
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/about" component={About}/>
      </Router>
    </Layout>
  );
}

export default App;