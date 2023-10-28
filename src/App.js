import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarouselPart from './components/CarouselPart';
import CardsParts from './components/CardsParts';
import NavbarPart from './components/NavbarPart';
import SocialsPart from './components/SocialsPart';
import FollowParts from './components/FollowParts';
import Footer from './components/Footer';
import Introduction from './pages/Introduction';
import Articles from './pages/Articles';
import Article from './pages/Actricle';


function App() {
  return (
    <Router>
    <div className="App">
      <header>
      <NavbarPart/>
      </header>
      <Switch>
        <Route exact path="/">
          <main>
          <CarouselPart/>
          <CardsParts/>
          <SocialsPart/>
          <FollowParts/>
          </main>
        </Route>
        <Route path="/cards">
          <Articles/>
        </Route>
        <Route path="/qui-sommes-nous">
          <Introduction/>
        </Route>
        <Route path="/article">
          <Article/>
        </Route>
      </Switch>
      <footer>
      <Footer/>
      </footer>
    </div>
    </Router>
  );
}

export default App;
