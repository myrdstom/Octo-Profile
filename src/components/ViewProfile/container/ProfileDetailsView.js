import React from 'react';

import ProfileSummaryView from './ProfileSummaryView';
import ChartsView from './ChartsView';

const ProfileDetailsView = () => {
    return (
        <div>
            <ProfileSummaryView />
            <ChartsView />
        </div>
    );
};

export default ProfileDetailsView;
