import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card.jsx"
import data from "./data.js"

function App() {
  const cards = data.map(item => {
    return (
        <Card
            item = {item}
        />
    )
})        
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
