import { observable, action } from 'mobx';

class ControllerStore {
    @observable public isControllerPanelOpen = true;
    @observable public isLayoutSectionOpen = true;
    @observable public isTypographySectionOpen = true;

    @action
    public toggleControllerPanel = () => {
        this.isControllerPanelOpen = !this.isControllerPanelOpen;
        if (this.isControllerPanelOpen === false) {
            this.isLayoutSectionOpen = false;
            this.isTypographySectionOpen = false;
        } else {
            this.isLayoutSectionOpen = true;
            this.isTypographySectionOpen = true;
        }
    }

    @action toggleLayoutSection = () => {
        this.isLayoutSectionOpen = !this.isLayoutSectionOpen;
    }

    @action toggleTypographySection = () => {
        this.isTypographySectionOpen = !this.isTypographySectionOpen;
    }
}

export { ControllerStore };
export const controllerStore = new ControllerStore();