import { FetchDataStore } from './FetchDataStore';
import { ControllerStore } from './ControllerStore';

class RootStore {
    public fetchDataStore: FetchDataStore;
    public controllerStore: ControllerStore;

    constructor() {
      this.fetchDataStore = new FetchDataStore(this)
      this.controllerStore = new ControllerStore(this)
    }
}
  
export { RootStore };
export const rootStore = new RootStore();