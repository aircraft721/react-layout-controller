import { observable, action } from 'mobx';
import { defaultButtonData, defaultInputData, IButtonObject, IDefaultInputs, IFlex, INone, IInline, IBlock, commonLayoutData, IArrayOfHtmlElements } from './DefaultData';
import { RootStore } from './RootStore';

class ControllerStore {
    public rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.displayControllerSectionsFromLocalStorage('controllerLayout');
        this.displayLayoutSectionFromLocalStorage('layoutSection');
        this.displayTypographySectionFromLocalStorage('typographySection');
        this.displayBackgroundSectionFromLocalStorage('backgroundSection');
        this.rootStore = rootStore;
    };

    @observable public isControllerPanelOpen: boolean = true;
    @observable public isLayoutSectionOpen: boolean = true;
    @observable public isTypographySectionOpen: boolean = true;
    @observable public isBackgroundSectionOpen: boolean = true;
    @observable public localStorageButtonObject: IButtonObject[] = [];
    @observable public buttonObject: IButtonObject[] = [];
    @observable public defautButtonObject: IButtonObject[] = defaultButtonData;

    @observable public defaultInputs: IDefaultInputs = defaultInputData; 
    @observable public layoutType: IBlock | IInline | INone | IFlex = commonLayoutData;

    @observable public arrayOfHtmlElements: IArrayOfHtmlElements[] = [];
    @observable public singleHtmlElement: IArrayOfHtmlElements;

    @action 
    public setInputData = (data: IArrayOfHtmlElements) => {
        this.singleHtmlElement = data;
    }

    @action setElementInArray = (data: IArrayOfHtmlElements) => {
        this.arrayOfHtmlElements.push(data);
    }

    @action
    public setArrayOfElements = (data: IArrayOfHtmlElements[]) => {
        this.arrayOfHtmlElements = data;
    }

    @action
    public toggleDisplayOptionsButtons = (index: number) => {
        this.defautButtonObject.map((button: IButtonObject) => button.isActive = false);
        this.defautButtonObject[index].isActive = true;
        const name = this.defautButtonObject[index].name;
        this.displayLayoutType(name);
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

    @action 
    public displayLayoutType = (key: string) => {
        this.layoutType = this.defaultInputs.layout[key];
    }
}

export { ControllerStore };