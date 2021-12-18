import { History } from 'history';

export interface Props {
    history: History;
}

export interface stateProps {
    repos: {
        repos: RepoData[] | [];
        loading: boolean;
    };
}

export interface RepoData {
    id: string;
    description: string;
    language: string;
    name: string;
    size: string;
    stars: number;
    stargazers_count: number;
    forks: number;
    html_url: string;
    forks_count: number;
}

export interface Profile {
    profile: {
        profile: {
            name: string;
            login: string;
        };
        loading: boolean;
    };
}

export interface ResponseGenerator {
    [key: string]: any;
}
