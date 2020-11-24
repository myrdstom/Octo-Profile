import React, { FunctionComponent } from 'react';

import ProfileSummary from './ProfileSummary';
import Charts from './Charts';
import ReposView from './Repos';
import { History, LocationState } from 'history';

interface Props {
    history: History<LocationState>;
    repos: {
        repos: {
            repos: RepoData[] | null;
            loading: boolean;
        };
    };
}

interface RepoData {
    id: string;
    description: string;
    language: string;
    name: string;
    size: string;
    stars: number;
    forks: number;
    stargazers_count: number;
    html_url: string;
    forks_count: number;
}

const ProfileDetailsView: FunctionComponent<Props> = props => {
    return (
        <div>
            <ProfileSummary {...props} />
            <Charts {...props} />
            <ReposView {...props} />
        </div>
    );
};

export default ProfileDetailsView;
