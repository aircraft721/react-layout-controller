import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Provider } from 'mobx-react';

const MainApp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    user-select: none;
`;  

//stores
import { rootStore } from './stores/RootStore';

//views
import { ControllerPanel } from './views/controller/ControllerPanel';
import { MainLayout } from './views/layout/MainLayout';
import { ControllerPanelLeftSidebar } from './views/controller/ControllerPanelLeftSidebar';

const stores = {
    rootStore
};

interface IProps {
    className?: string;
}

export const App: React.SFC<IProps> = () => {
    return (
        <MainApp>
            <ControllerPanelLeftSidebar {...stores}/>
            <MainLayout
                controllerStore={stores.rootStore.controllerStore}
                getElements={stores.rootStore.fetchDataStore.getElements}
                deleteElement={stores.rootStore.fetchDataStore.deleteElement}
            />
            <ControllerPanel {...stores}/>
        </MainApp>
    );
}

ReactDOM.render(
<Provider 
    rootStore={rootStore}
>
    <App />
</Provider>
, document.getElementById('app'));
