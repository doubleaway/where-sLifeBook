import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import Header from './Components/Header';
function App() {
  return (
    <>
      <Header login={false} />
      <Home />
    </>
  )
}
export default App;
