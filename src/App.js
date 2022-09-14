// import logo from './logo.svg';
import './App.css';
import {simpsons} from "./components/simpsonsdata";

function App() {
  return(<div>
        {simpsons.map(simpson => (<div>
          <h2>{simpson.id}  {simpson.name}</h2>
          <p>{simpson.description}</p>
        </div>))}
      </div>

  )

}
//
// export default simpsonsfamily;

// functionction App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
