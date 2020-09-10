import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ProfileSummary from '../Presenter/ProfileSummary';

const ProfileSummaryView = ({ history }) => {
    const [user, setUser] = useState({
        avatar: '',
        name: '',
        username: '',
        location: '',
        repositories: '',
        followers: '',
        following: '',
    });
    const {profile, repos} = useSelector((state) => state);

    useEffect(() => {
        if (repos.repos === null && repos.loading === false) {
            history.push('/');
        } else {
            const {
                avatar_url,
                name,
                login,
                location,
                public_repos,
                followers,
                following,
            } = profile.profile;

            setUser({
                avatar: avatar_url,
                name,
                username: login,
                location,
                repositories: public_repos,
                followers,
                following,
            });
        }
    }, [history, repos.repos, repos.loading, profile.profile]);

    const {
        avatar,
        name,
        username,
        location,
        repositories,
        followers,
        following,
    } = user;

    return (
        <div>
            <ProfileSummary
                avatar={avatar}
                name={name}
                username={username}
                location={location}
                repositories={repositories}
                followers={followers}
                following={following}
            />
        </div>
    );
};

ProfileSummaryView.propTypes = {
    profile: PropTypes.object,
};


export default ProfileSummaryView;
