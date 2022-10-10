// import logo from './assets/logo.svg';
import './styles/App.css';
import Header from './components/header'
import Candle, * as D from './components/candle'
import NewCandle from './components/newCandle';

function App() {
  const description = 'lorem ipsum ';
  const fragancies = ['frag A', 'frag B', 'frag C'];
  const candleName = 'vela A'
  const fragancyName = 'fragancia A'
  return (
    <div className="App">
      <Header />
      <NewCandle />
      <Candle
        name={candleName}
        fragancy={fragancyName}
        cost={45000}
      />
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
