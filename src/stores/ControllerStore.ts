import { observable, action } from 'mobx';
import { defaultInputData, IDefaultInputs, IFlex, INone, IInline, IBlock, commonLayoutData, IArrayOfHtmlElements } from './DefaultData';
import { RootStore } from './RootStore';

class ControllerStore {
    public rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    };


    @observable public defaultInputs: IDefaultInputs = defaultInputData; 
    @observable public layoutType: IBlock | IInline | INone | IFlex = commonLayoutData;
    @observable public arrayOfHtmlElements: IArrayOfHtmlElements[] = [];
    @observable public singleHtmlElement: IArrayOfHtmlElements;

    @action 
    public setInputData = (data: IArrayOfHtmlElements) => {
        this.singleHtmlElement = data;
    }

    @action
    public setBackgroundColor = (color?: string) => {
        this.singleHtmlElement['backgroundColor'] = color;
    }

    @action setElementInArray = (data: IArrayOfHtmlElements) => {
        this.arrayOfHtmlElements.push(data);
    }

    @action
    public setArrayOfElements = (data: IArrayOfHtmlElements[]) => {
        this.arrayOfHtmlElements = data;
    }

    @action 
    public displayLayoutType = (key: string) => {
        this.layoutType = this.defaultInputs.layout[key];
    }
}

export { ControllerStore };