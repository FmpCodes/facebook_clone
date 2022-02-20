import Header from './components/Header'
import Sidebar from './components/Sidebar'
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
          <div className="app__body">
            <Sidebar />
          </div>
          </>
        )
      }
    </div>
  );
}

export default App;
