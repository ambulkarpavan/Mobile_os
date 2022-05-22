import logo from './logo.svg';
import './App.css';
import Operating from './components/Operating'
import Manufacturars from './components/Manufacturars';

function App() {

  let info=[
    {name: "Samgsung"},
    {name: "HTC"},
    {name: "Micromax"},
    {name: "Apple"}

  ]
 
//   return (
//     <div className="App">
//     <Operating/>
//     <h1>Mobile Manufacturars</h1>
//     {info.map((user) => (
//    <div>
//  <Manufacturars {...user}/>
//    </div>

return (
  <div className="App">
  <Operating/>
<Manufacturars />
    </div>
  );
}

export default App;
