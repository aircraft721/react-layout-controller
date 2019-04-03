import { FetchDataStore } from './FetchDataStore';
import { ControllerStore } from './ControllerStore';
import { LocalStorageStore } from './LocalStorageStore';

class RootStore {
    public fetchDataStore: FetchDataStore;
    public controllerStore: ControllerStore;
    public localStorageStore: LocalStorageStore;

    constructor() {
      this.fetchDataStore = new FetchDataStore(this)
      this.controllerStore = new ControllerStore(this)
      this.localStorageStore = new LocalStorageStore(this)
    }
}
  
export { RootStore };
export const rootStore = new RootStore();