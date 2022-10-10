// import logo from './assets/logo.svg';
import './styles/App.css';
import Header from './components/header'
import Candle, * as D from './components/candle'

function App() {
  const description = 'lorem ipsum ';
  const fragancies = ['frag A', 'frag B', 'frag C'];
  return (
    <div className="App">
      <Header />
      <Candle />
      <D.Fragance />
      <D.Description />
      Descripcion: {description}
      <ul>
        {
          fragancies.map((fragancy, idx) => 
            <li className={`${fragancy}`}>
              { fragancy }
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App; 
