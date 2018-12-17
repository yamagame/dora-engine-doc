import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const Loading = () => <div>Loading...</div>;

const TopPage = Loadable({
  loader: () => import('./containers/TopPage'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Header><a href={`${process.env.PUBLIC_URL}/`}>ドラエンジン ドキュメント</a></Header>
          </div>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={TopPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
