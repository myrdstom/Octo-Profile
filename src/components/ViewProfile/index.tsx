import React, { FunctionComponent } from 'react';

import { History } from 'history';
import ProfileSummary from './profileSummary';
import Charts from './Charts';
import ReposView from './Repos';

interface Props {
    history: History;
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

const ProfileDetailsView: FunctionComponent<Props> = props => (
    <div>
        <ProfileSummary {...props} />
        <Charts {...props} />
        <ReposView {...props} />
    </div>
);

export default ProfileDetailsView;
