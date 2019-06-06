import React, { Component } from "react";
import obj from "./mob-lib/AllStore";

class SampleComponent extends Component {
  render() {
    
    const { testStore } = this.props;
    
    return (
      <div>
        <span>{testStore.value}</span>
        <button onClick={(e) => {
          testStore.value = (new Date().getSeconds())
        }}>Click Me</button>
      </div>
    );
  }
}

export default obj.inject(["testStore"])(SampleComponent);
