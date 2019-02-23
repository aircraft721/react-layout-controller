import { observable, action, computed } from 'mobx';
import { defaultButtonData, defaultInputData, IButtonObject, IDefaultInputs, IFlex, INone, IInline, IBlock } from './DefaultData';

class ControllerStore {
    constructor() {
        this.displayObjectButtonsFromLocalStorage();
        this.displayControllerSectionsFromLocalStorage('controllerLayout');
        this.displayLayoutSectionFromLocalStorage('layoutSection');
        this.displayTypographySectionFromLocalStorage('typographySection');
        this.displayBackgroundSectionFromLocalStorage('backgroundSection');
        this.displayLayoutType(this.localStoragSelectedDisplayButtonName);
        this.displayLayoutType(this.selectedDisplayButtonName);
        
    };

    @observable public isControllerPanelOpen: boolean = true;
    @observable public isLayoutSectionOpen: boolean = true;
    @observable public isTypographySectionOpen: boolean = true;
    @observable public isBackgroundSectionOpen: boolean = true;
    @observable public localStorageButtonObject: IButtonObject[] = [];
    @observable public buttonObject: IButtonObject[] = [];
    @observable public defautButtonObject: IButtonObject[] = defaultButtonData;

    @observable public defaultInputs: IDefaultInputs = defaultInputData; 
    @observable public layoutType: IBlock | IInline | INone | IFlex;

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

    public displayObjectButtonsFromLocalStorage = () => {
        const localButtonObject = localStorage.getItem('buttonObject');
        if (localButtonObject) {
            const parsedObject = <IButtonObject[]>JSON.parse(localButtonObject);
            if (parsedObject.length == defaultButtonData.length) {
                this.buttonObject = parsedObject;
            } else {
                this.buttonObject = defaultButtonData;
            }
        } else {
            this.buttonObject = defaultButtonData;
        }
    }

    public setLocalStorageButton(localStorageObject: IButtonObject[]) {
        this.localStorageButtonObject = localStorageObject;
    }

    @action
    public toggleControllerPanel = () => {
        localStorage.setItem('controllerLayout', JSON.stringify(this.isControllerPanelOpen));
        const getLocalLayout = localStorage.getItem('controllerLayout');
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isControllerPanelOpen = !localStorageLayout;
        } else {
            this.isControllerPanelOpen = !this.isControllerPanelOpen;
        }
    }

    @action toggleLayoutSection = () => {
        localStorage.setItem('layoutSection', JSON.stringify(this.isLayoutSectionOpen));
        const getLocalLayout = localStorage.getItem('layoutSection');
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isLayoutSectionOpen = !localStorageLayout;
        } else {
            this.isLayoutSectionOpen = !this.isLayoutSectionOpen;
        }
    }

    @action toggleTypographySection = () => {
        localStorage.setItem('typographySection', JSON.stringify(this.isTypographySectionOpen));
        const getLocalLayout = localStorage.getItem('typographySection');
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isTypographySectionOpen = !localStorageLayout;
        } else {
            this.isTypographySectionOpen = !this.isTypographySectionOpen;
        }
    }

    @action toggleBackgroundSection = () => {
        localStorage.setItem('backgroundSection', JSON.stringify(this.isBackgroundSectionOpen));
        const getLocalLayout = localStorage.getItem('backgroundSection');
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isBackgroundSectionOpen = !localStorageLayout;
        } else {
            this.isBackgroundSectionOpen = !this.isBackgroundSectionOpen;
        }
    }

    public displayControllerSectionsFromLocalStorage = (sectionName: string) => {
        const getLocalLayout = localStorage.getItem(sectionName);
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isControllerPanelOpen = !localStorageLayout;
        } else {
            this.isControllerPanelOpen = !this.isControllerPanelOpen;
        }
    }

    public displayLayoutSectionFromLocalStorage = (controller: string) => {
        const getLocalLayout = localStorage.getItem(controller);
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isLayoutSectionOpen = !localStorageLayout;
        } else {
            this.isLayoutSectionOpen = !this.isLayoutSectionOpen;
        }
    }

    public displayTypographySectionFromLocalStorage = (controller: string) => {
        const getLocalLayout = localStorage.getItem(controller);
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isTypographySectionOpen = !localStorageLayout;
        } else {
            this.isTypographySectionOpen = !this.isTypographySectionOpen;
        }
    }

    public displayBackgroundSectionFromLocalStorage = (controller: string) => {
        const getLocalLayout = localStorage.getItem(controller);
        if (getLocalLayout) {
            const localStorageLayout = JSON.parse(getLocalLayout);
            this.isBackgroundSectionOpen = !localStorageLayout;
        } else {
            this.isBackgroundSectionOpen = !this.isBackgroundSectionOpen;
        }
    }

    @computed 
    public get selectedDisplayButton(): IButtonObject {
        const localStorageData = this.buttonObject.find(data => data.isActive === true);
        const defaultData = this.defautButtonObject.find(data => data.isActive === true);
        const data = localStorageData ? localStorageData : defaultData;
        
        return <IButtonObject>data;
    }

    @computed get localStoragSelectedDisplayButtonName(): string {
        return this.selectedDisplayButton.name;
    }

    @computed get defaultDisplayButtonName() {
        return this.defautButtonObject.find(data => data.isActive === true);
    }

    @computed get selectedDisplayButtonName() {
        return this.defaultDisplayButtonName.name;
    }

    @action 
    public displayLayoutType = (key: string) => {
        this.layoutType = this.defaultInputs.layout[key];
    }

}

export { ControllerStore };
export const controllerStore = new ControllerStore();