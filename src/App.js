import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faDiceFive } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">      
      <header>
        <span>advice </span>
        <span id="numberAdvice">#177</span>
      </header>

      <main>
        "It is easy to sit up and take notice, whta's difficult is
        getting up and taking action."
      </main>

      <footer>
        <hr/>
        <FontAwesomeIcon className="iconPause" icon={faPause} />
        <hr/>
      </footer>

      <button>
        <FontAwesomeIcon className="iconDice" icon={faDiceFive} />
      </button>
    </div>    
  );
}

export default App;
