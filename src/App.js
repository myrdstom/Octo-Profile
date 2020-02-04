import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import store from "./redux/store/combineStore";
import FilterProfileView from "./components/FilterProfile/container/FilterProfileView";
import ProfileDetailsView from "./components/ViewProfile/container/ProfileDetailsView";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={FilterProfileView} />
                    <Route exact path="/profile" component={ProfileDetailsView} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
