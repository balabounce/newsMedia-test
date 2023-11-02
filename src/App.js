import logo from './logo.svg';
import './App.css';
import NewsMedia from './components/NewsFeed';

function App() {
  return (
    <div className="App">
      <h1>Лента новостей</h1>
      <NewsMedia />
    </div>
  );
}

export default App;

