import constants from './Constants'

class ProxyHandler {
  constructor() {
    this.observables = [];
  }

  get(obj, prop) {
    
    if(obj[prop] === typeof (constants.func) ){
      return function(...args){
        return obj[prop].apply(this,args);
      }
    }
    //console.log(this , obj , 15)
    return obj[prop] || this[prop];
  }

  set(obj, prop, value) {
    console.log(20 , obj , prop, value)
    try {
      obj[prop] = value;
      for (let observable of this.observables) {
        observable.setState(state => {
          return {};
        });
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  assignObservables(Component) {
    this.observables.push(Component);
  }

  removeObservables(Component) {
    for(let c of this.observables){
      if(c === Component){
        this.observables.pop(Component)
        break
      }
    }
    console.log(this.observables);
  }
}

export default ProxyHandler;
