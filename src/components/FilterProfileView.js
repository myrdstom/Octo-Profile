import React, {Component} from 'react';
import axios from'axios'
import PropTypes from 'prop-types';
import {baseUrl, clientId, clientSecret} from "../config/config";

class FilterProfileView extends Component {
    componentDidMount() {
        console.log(axios
            .get(
                `${baseUrl}/myrdstom?client_id=${clientId}&client_secret=${clientSecret}`,
            ))
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

FilterProfileView.propTypes = {};

export default FilterProfileView;