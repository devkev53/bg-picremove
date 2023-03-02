import { Router, Route } from "wouter";
// Pages
import Layout from './containers/Layout'
import Home from './pages/Home'
const App = () => {
  return (
    <Layout>
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    </Layout>
  );
}

export default App;