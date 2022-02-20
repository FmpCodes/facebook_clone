import Header from './components/Header'
import './App.css';

function App() {
  const user = true
  return (
    <div className="app">
      {
        !user ? (
          <h1>Hello</h1>
        ): (
          <>
            <Header />
          </>
        )
      }
    </div>
  );
}

export default App;
