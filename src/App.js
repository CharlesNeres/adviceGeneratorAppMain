import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">      
      <header>
        <span>advice</span>
        <span id="numberAdvice">#177</span>
      </header>

      <main id="contentAdvice">
        "It is easy to sit up and take notice, whta's difficult is
        getting up and taking action."
      </main>

      <footer>
        <hr className="leftLine" />
        <FontAwesomeIcon icon={faPause} />
        <hr className="rightLine" />
      </footer>
    </div>    
  );
}

export default App;
