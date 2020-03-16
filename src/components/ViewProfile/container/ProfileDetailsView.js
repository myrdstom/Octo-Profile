import React from 'react';

import ProfileSummaryView from './ProfileSummaryView';
import ChartsView from './ChartsView';
import ReposView from './ReposView';

const ProfileDetailsView = () => {
    return (
        <div>
            <ProfileSummaryView />
            <ChartsView />
            <ReposView/>
        </div>
    );
};

export default ProfileDetailsView;
