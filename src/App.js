import './App.css';
import BasicExample from './components/GitHubCard'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <hr />
      <Header />
      <div className='container'>
        <h1>Profile Card</h1>
        <br/>
        <BasicExample />
      </div>
      <hr />
    </div>
  );
}

export default App;
