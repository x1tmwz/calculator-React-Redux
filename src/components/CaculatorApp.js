import React from 'react';
import CaculatorDisplay from './CaculatorDisplay';
import CaculatorBody from './CaculatorBody';
import { Provider } from 'react-redux'
import configStore from '../store/configStore';

const store = configStore();

const CaculatorApp = () => {
    return (
        <Provider store={store}>
            <div className="wrapper">
                <div className="calculator">
                    <CaculatorDisplay />
                    <CaculatorBody />
                </div>

            </div>





        </Provider>
    );
}
export { CaculatorApp as default };
