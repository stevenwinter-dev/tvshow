import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
