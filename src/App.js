import logo from './logo.svg';
import './App.css';

function App() {
  const name1= "Hellow World"
  const obj = {
    name: " Hellow World Object"
  }
  const data = ["We","Are","United"]
  const list = [
    {
      name: "Hellow world 1" 
    },
    {
      name2:"Hellow World 2"
    },
    {
      name3:"Hellow World 3"
    }
  ]
  const complex = [
    {
    company: "XYZ",
    jobs: ['javascript','React']
  },
  {
    company:'ABC',
    jobs:['Angular','Lonic']
  }]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> 
          
          {name1}
        </h1>
        <p>
          {obj.name}
        </p>
          <ol>
            {data.map(function(item){
              return <li>              
                {item}</li>
            })}
            
          </ol>
        <ul>
          {list.map(function(items){
            return <li>{items.name2} {items.name3} {items.name}  </li>
          })}
        </ul>
          <table border="2px" >
            <tr>
              <th>Company</th>
              <th colspan="2" >Jobs</th>
            </tr>
            {complex.map(function(upper){
              return <tr>
                  <td >
                    {upper.company}
                  </td>
                  <td>
                      {upper.jobs[0]}
                  </td>
                  <td>                    
                    {upper.jobs[1]}
                  </td>
              </tr>
            })}
          </table>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Insha Allah, I am to become a world-class developer one day."
        </a>
      </header>
    </div>
  );
}

export default App;
