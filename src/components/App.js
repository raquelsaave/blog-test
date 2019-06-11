import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

//Components
import Login from './Login/Login';
import StartPage from './StartPage/StartPage'
import MainPage from './MainPage/MainPage'
import ExplorePage from './ExplorePage/ExplorePage'
//CSS
import './App.css';
function App() {
  // return (
  //   <div className="App">
  //     <StartPage />
  //     <Login />
  //   </div>

    // BrowserRouter is a Higher Order Component
  return (
    <BrowserRouter>
    <Route exact path="/" component={StartPage} />
    <Route exact path="/" component={Login} />
    <Route path="/Main" component={MainPage} />
    <Route path="/Explore" component={ExplorePage} />
    </BrowserRouter>
  );
}

export default App;
