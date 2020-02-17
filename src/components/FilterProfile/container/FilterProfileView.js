import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../../redux/actions/profileActions';
import FilterProfile from '../Presenter/FilterProfile';

const FilterProfileView = ({ profile, history }) => {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            if (profile && profile.loading !== true && profile.profile && profile.profile.location) {
                history.push('/profile');

            } else if(profile.profile === {}) {
                history.push('/');
                console.log('the profile does not exist');

            }
        } else didMountRef.current = true;
    }, [history, profile]);

    const handleChange = e => setUsername(e.target.value);

    const handleKeyPress = e => {
        if (e.keyCode === 13) {
            if (username === '') {
                console.log('please input something');
            } else {
                dispatch(getProfile(username));
            }
        }
    };

    return (
        <div>
            <FilterProfile
                username={username}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
};

FilterProfileView.propTypes = {
    profile: PropTypes.object,
};

export const mapStateToProps = state => ({
    profile: state.profile,
});

export default connect(mapStateToProps)(withRouter(FilterProfileView));
