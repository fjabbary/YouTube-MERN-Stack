
import './App.css';
import Main from './components/Main';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Upload from './components/Upload';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/videos/:id" component={Main} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
