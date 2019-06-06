class Context {
    constructor() {
      this.context = {};
    }
    registerInContext(name, value) {
      this.context[name] = value;
    }
  
    getAllValues() {
      return this.context;
    }
  
    getContextValue(name) {
      for (let key of Object.keys(this.context)) {
        console.log(key, 20);
      }
  
      return this.context[name];
    }
  
    hasValue(name) {
      return name in this.context;
    }
  
    deleteInContext(name) {
      if (name in this.context) {
        delete this.context[name];
      }
    }
  }
  
  export default new Context();
  