import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import SnackbarProvider from "react-simple-snackbar";
import store from "./redux/store/combineStore";
import FilterProfile from './components/FilterProfile';
import ViewProfile from './components/ViewProfile/container';


function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={FilterProfile} />

                        <Route exact path="/profile" component={ViewProfile} />
                    </Switch>
                </Router>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
