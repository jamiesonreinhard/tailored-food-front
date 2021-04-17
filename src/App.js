import './sass/App.scss';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/About/Team';
import Partners from './components/Partners/Partners';
import Projects from './components/Projects/Projects';
import Media from './components/Media/Media';
import Contact from './components/Contact/Contact';
import Posts from './components/Posts/Posts';
import SinglePost from './components/Posts/SinglePost';
import TailoredNav from './components/TailoredNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TailoredNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={SinglePost} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
