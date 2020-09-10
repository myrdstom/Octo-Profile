import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import SnackbarProvider from "react-simple-snackbar";
import store from "./redux/store/combineStore";
import FilterProfileView from "./components/FilterProfile/container/FilterProfileView";
import ProfileDetailsView from "./components/ViewProfile/container/ProfileDetailsView";


function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={FilterProfileView} />

                    <Route exact path="/profile" component={ProfileDetailsView} />
                </Switch>
            </Router>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
