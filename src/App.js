import './App.scss';
import Attribution from './components/Attribution';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="background-pattern"></div>
      <Header />
      <Card />
      <Attribution />
    </div>
  );
}

export default App;
