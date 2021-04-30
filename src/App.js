import React, { Component } from 'react'
import FunctionnalCounter from './components/FunctionnalCounter' ;
import './App.css'
const App = () => {

  const [display , setDisplay] = useState (true) ;
  
  
  
    return (
  
  
      <div className="App">
        <button onClick={()=> setDisplay(!display)} >{display ? "Hide Profile" : "Show Profile"}</button>
  {
    display ? 
        <FunctionnalCounter/> : null
  
  
  }
      </div>
    )
  }
  
  export default App
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //--------------------------------------Class Component----------------------------------------------------------------------
  
  
  // import React, { Component } from 'react';
  // import Counter from './components/Counter';
  // import FunctionnalCounter from './components/FunctionnalCounter' ;
  // import './App.css'
  
  
  // export default class App extends Component {
  
  // state={
  
  // display:true
  
  // }
  
  
  
  
  
  //   render() {
  //     return (
  //       <div className="App">
  
  //         <FunctionnalCounter/>
  
  
  
  
  //       </div>
  //     )
  //   }
  // }