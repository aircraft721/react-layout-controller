import { FetchDataStore } from './FetchDataStore';
import { ControllerStore } from './ControllerStore';
import { LocalStorageStore } from './LocalStorageStore';

class RootStore {
  public fetchDataStore = new FetchDataStore(this)
  public controllerStore = new ControllerStore(this)
  public localStorageStore = new LocalStorageStore(this)
  // constructor() {
  //   hydrate('controllerStore', this.controllerStore)
  // }
}
  
export { RootStore };
export const rootStore = new RootStore();