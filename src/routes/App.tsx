import { Router, Route } from "wouter";
// Pages
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Upload from '../pages/Upload'
import About from '../pages/About'
import MoreEffects from '../pages/MoreEffects'

const App = () => {
  return (
    <Layout>
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/about" component={About}/>
        <Route path="/Effects" component={MoreEffects}/>
      </Router>
    </Layout>
  );
}

export default App;