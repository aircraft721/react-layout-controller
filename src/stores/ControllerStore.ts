import { observable, action, computed } from 'mobx';
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
    //background observables
    @observable public backgroundColor: string = 'transparent';

    //here we build the single html element
    @action
    public submitUserInputData = () => {
        this.setInputData(this.singleHtmlElement);
        return this.singleHtmlElement;
    }

    @computed
    public get elementsArray() {
        this.arrayOfHtmlElements.map(x => x.isTopLevelElement = true);
        return this.arrayOfHtmlElements;
    }

    @action 
    public setInputData = (data: IArrayOfHtmlElements) => {
        const backgroundColor = this.backgroundColor;
        return this.singleHtmlElement = { ...data, backgroundColor};
    }

    @action
    public setBackgroundColor = (color: string) => {
        this.backgroundColor = color;
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