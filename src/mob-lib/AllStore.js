import context from "./Context";

import ProxyHandler from "./ProxyHandler";
import wrapperHoc from "./WrapperHoc";

function iniAllStore(storeObject = {}) {
  for (let store of Object.keys(storeObject)) {
    context.registerInContext(
      store,
      new Proxy(storeObject[store], new ProxyHandler())
    );
  }
}

function inject(listOfStore) {
  
  
  return function(Component) {
    
    return wrapperHoc(listOfStore, Component);
  };
}

let exportedObject = {
  storeProvider: iniAllStore,
  inject
};

export default exportedObject;
