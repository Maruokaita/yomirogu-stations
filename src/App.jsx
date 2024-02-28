import logo from './logo.svg';
import './App.css';
import axios from 'axios';

axios.get('https://app.swaggerhub.com/apis/INFO_3/BookReviewApplication/1.0.0')
  .then(response => {
    // レスポンスデータを処理するコードをここに記述
    console.log('レスポンスデータ:', response.data);
    // 他の処理を追加するか、必要に応じてデータを利用する処理をここに追加
  })
  .catch(error => {
    console.error('リクエストエラー:', error);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
