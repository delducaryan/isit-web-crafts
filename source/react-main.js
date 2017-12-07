import React from 'react';
import ReactDOM from 'react-dom';
import HomeButtons from './HomeButtons';
import reducer from './reducer';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';
const store = createStore(reducer);

$(document).ready(function() {
    try {
        const root = document.getElementById('home');
        ReactDOM.render(
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <HomeButtons/>
                    </div>
                </MuiThemeProvider>
            </Provider>
            , root);
    } catch (e) {
        console.error(e);
        document.getElementById('load').innetHRML = 'Error loading the Firebase SDK, check the console.';
    }
});
