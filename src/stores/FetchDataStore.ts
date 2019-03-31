import { action } from 'mobx';
import { RootStore } from './RootStore';

class FetchDataStore {
    public url = 'http://localhost:3000';

    public rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action 
    public addNewElement = async (element: any) => {
        const response = await fetch(`${this.url}/element/create`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(element)
        }).then(response => response.json());
        this.rootStore.controllerStore.setElementInArray(response);
        await this.getElements();
        
        return response;
    }
    
    @action
    public getElements = async () => {
        return await fetch(`${this.url}/elements`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => response.json().then(res => {
            this.rootStore.controllerStore.setArrayOfElements(res)
        }))
        
    };
    
    @action deleteElement = async (id: string) => {
        const response = await fetch(`${this.url}/element/delete/${id}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            }
        })
        await this.getElements();
        return response;
    }
}

export { FetchDataStore };
