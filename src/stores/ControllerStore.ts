import { observable, action } from 'mobx';
import { defaultButtonData } from './DefaultData';

export interface IButtonObject {
    name: string;
    display: string;
    src: string;
    isActive: boolean;
}

class ControllerStore {
    constructor() {
        const localButtonObject = localStorage.getItem('buttonObject');
        if (localButtonObject) {
            const parsedObject = JSON.parse(localButtonObject);
            this.buttonObject = parsedObject;
        } else {
            this.buttonObject = defaultButtonData;
        }
    }

    @observable public isControllerPanelOpen: boolean = true;
    @observable public isLayoutSectionOpen: boolean = true;
    @observable public isTypographySectionOpen: boolean = true;
    @observable public isBackgroundSectionOpen: boolean = true;
    @observable public localStorageButtonObject: IButtonObject[] = [];
    @observable public buttonObject: IButtonObject[] = [];

    @action
    public toggleDisplayOptionsButtons = (index: number) => {
        this.buttonObject.map((button: IButtonObject) => button.isActive = false);
        this.buttonObject[index].isActive = true;
        localStorage.setItem('buttonObject', JSON.stringify(this.buttonObject));
        const localButtonObject = localStorage.getItem('buttonObject');
        if (localButtonObject) {
            const localStorageButtonObject = JSON.parse(localButtonObject);
            this.setLocalStorageButton(localStorageButtonObject)
        }
    }

    public setLocalStorageButton(localStorageObject: IButtonObject[]) {
        this.localStorageButtonObject = localStorageObject;
    }

    @action
    public toggleControllerPanel = () => {
        this.isControllerPanelOpen = !this.isControllerPanelOpen;
    }

    @action toggleLayoutSection = () => {
        this.isLayoutSectionOpen = !this.isLayoutSectionOpen;
    }

    @action toggleTypographySection = () => {
        this.isTypographySectionOpen = !this.isTypographySectionOpen;
    }

    @action toggleBackgroundSection = () => {
        this.isBackgroundSectionOpen = !this.isBackgroundSectionOpen;
    }
}

export { ControllerStore };
export const controllerStore = new ControllerStore();