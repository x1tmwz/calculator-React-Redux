import React from 'react';
import CaculatorDisplay from './CaculatorDisplay';
import CaculatorBody from './CaculatorBody';
import { Provider } from 'react-redux'
import configStore from '../store/configStore';

const store = configStore();

const CaculatorApp = () => {
    return (
        <Provider store={store}>
            <div id="wrapper">
                <div id="app">
                    <div className="calculator">
                        <CaculatorDisplay />
                        <CaculatorBody />
                    </div>

                </div>
            </div>
        </Provider>
    );
}
export { CaculatorApp as default };
