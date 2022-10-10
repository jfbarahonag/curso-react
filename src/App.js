// import logo from './assets/logo.svg';
import './styles/App.css';
import Header from './components/header'
import Candle, * as D from './components/candle'

function App() {
  return (
    <div className="App">
      <Header />
      <Candle />
      <D.Fragance />
      <D.Description />
    </div>
  );
}

export default App; 
