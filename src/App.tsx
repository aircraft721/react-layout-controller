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
import { controllerStore } from './stores/ControllerStore';

//views
import { ControllerPanel } from './views/controller/ControllerPanel';
import { MainLayout } from './views/layout/MainLayout';

const stores = {
    controllerStore
};

interface IProps {
    className?: string;
}

export const App: React.SFC<IProps> = () => {
    return (
        <MainApp>
            <MainLayout />
            <ControllerPanel {...stores}/>
        </MainApp>
    );
}

ReactDOM.render(
<Provider 
    {...stores}
>
    <App />
</Provider>
, document.getElementById('app'));
