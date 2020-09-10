import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "react-simple-snackbar";
import {closeOptions} from '../../../helpers/snackbar.styles';
import {setRepos, setProfile} from '../../../redux/actions/types';
import FilterProfile from '../Presenter/FilterProfile';

const FilterProfileView = ({ history }) => {
    const [username, setUsername] = useState('');
    const [closeSnackbar] = useSnackbar(closeOptions);

    const dispatch = useDispatch();
    const didMountRef = useRef(false);
    const profile = useSelector((state) => state.profile);

    useEffect(() => {
        if (didMountRef.current) {
            if (profile && profile.loading !== true && profile.profile && profile.profile.location) {
                history.push('/profile');
            } else if(profile?.profile?.email === null) {
                history.push('/');
                closeSnackbar('this github user does not exist')

            }
        } else didMountRef.current = true;
    }, [history, profile]);

    const handleChange = e => setUsername(e.target.value);

    const handleKeyPress = e => {
        if (e.keyCode === 13) {
            if (username === '') {
                closeSnackbar('please input something')
            } else {
                dispatch(setProfile(username));
                dispatch(setRepos(username));
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


export default FilterProfileView;
