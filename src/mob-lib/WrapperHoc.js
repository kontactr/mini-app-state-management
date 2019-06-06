import React from "react";
import context from './Context'

function wrapperHoc(listOfProps, Component) {
  let temp={}
  for (let store of listOfProps) {
      if (context.hasValue(store)) {
        temp[store] = context.getContextValue(store);
      }
    }
    console.log(temp , 11)

  return class WrapperComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Component {...temp} {...this.props}  />
        </React.Fragment>
      );
    }

    componentDidMount() {
      for (let store of listOfProps) {
        let storeObject = temp[store];
       // console.log(storeObject , 25)
        storeObject.assignObservables(this);
        console.log(storeObject)
      }
    }

    componentWillUnmount() {
      for (let store of listOfProps) {
        let storeObject = temp[store];
        storeObject.removeObservables(this);
      }
    }
  };
}

export default wrapperHoc;
