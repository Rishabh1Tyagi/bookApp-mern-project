import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import component
// import Navbar from './components/Navbar/Navbar';
import AddBook from './components/Books/AddBooks';


function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Navbar /> */}
    <div className="App">
      <h1>Book Store App!!</h1>
      <AddBook />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
