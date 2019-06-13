import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

//Components
import StartPage from './StartPage/StartPage'
import MainPage from './MainPage/MainPage'
import ExplorePage from './ExplorePage/ExplorePage'
import BlogPost from './BlogPost/BlogPost'
import Footer from './Footer/Footer'
//CSS
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={StartPage} />
    <Route path="/Main" component={MainPage} />
    <Route path="/Explore" component={ExplorePage} />
    <Route path="/BlogPost" component={BlogPost} />
    <Route component={Footer} />
    </BrowserRouter>
  );
}

export default App;
