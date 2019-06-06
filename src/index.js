import React from "react";
import ReactDOM from "react-dom";
import './RootStore'
import SampleComponent from "./SampleComponent";



console.log(123456);

function App() {
  console.log(456);
  return (
    <div className="App">
      <SampleComponent />
      <SampleComponent />
      <div>
        <SampleComponent />
      </div>
    </div>
  );
}

function App1(){
  return (
    <SampleComponent />
  )
}

class App2 extends React.Component{
  state ={
    flag: false
  }
  render(){
    const {flag} = this.state;
    return (
      <React.Fragment>
        <button onClick={(e) => {
          this.setState((state) => {
            return{
              flag: !state.flag
            }
          })
        }}>Switch</button>
        {flag ? <App1 /> : <App /> }
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App2 />, rootElement);
