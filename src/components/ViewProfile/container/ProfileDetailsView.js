import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfileSummary from '../Presenter/ProfileSummary';

const ProfileDetailsView = ({ profile, history }) => {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [repositories, setRepositories] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');

    useEffect(() => {
        if (profile.profile === null) {
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
            setAvatar(avatar_url);
            setName(name);
            setUsername(login);
            setLocation(location);
            setRepositories(public_repos);
            setFollowers(followers);
            setFollowing(following);
        }
    }, [history, profile.profile]);


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

ProfileDetailsView.propTypes = {
    profile: PropTypes.object,
};

export const mapStateToProps = state => ({
    profile: state.profile,
});

export default connect(mapStateToProps)(withRouter(ProfileDetailsView));
