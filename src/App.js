import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import store from "./redux/store/combineStore";
import FilterProfileView from "./components/FilterProfileView";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={FilterProfileView} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
