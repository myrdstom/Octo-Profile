import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ProfileDetailsView = ({ profile, history }) => {

    useEffect(() => {
        if (profile.profile === null) {
            history.push('/');
        }
    }, []);
    return <div>The viewed profile</div>;
};

ProfileDetailsView.propTypes = {
    profile: PropTypes.object,
};

export const mapStateToProps = state => ({
    profile: state.profile,
});

export default connect(mapStateToProps)(withRouter(ProfileDetailsView));
