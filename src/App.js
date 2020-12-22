import './sass/App.scss';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Media from './components/Media/Media';
import Contact from './components/Contact/Contact';
import TailoredNav from './components/TailoredNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TailoredNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
