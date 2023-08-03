import Header from './components/Header';
import './App.css';
import AppRoutes from './routes/index';
function App() {
  return (
    <div className="App">
      <Header/>
     <AppRoutes/>
    </div>
  );
}

export default App;
