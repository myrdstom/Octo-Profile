import React, { FC } from 'react';
import Octicon, { Repo, RepoForked } from '@primer/octicons-react';
import langColors from '../../../helpers/langColors';
import './repoItems.css';

export interface repoItemsProps {
    repositories: repoItems[] | null;
}

export interface repoItems {
    id: string;
    description: string;
    language: string;
    name: string;
    size: string;
    stars: number;
    forks: number;
    url: string;
}

const RepoItems: FC<repoItemsProps | null> = ({ repositories }) => {
    return (
        <div>
            <div className="repositories">
                <div className="repos-title"> Popular Repos</div>
                <div className="repo-cards">
                    {repositories?.map((repo: repoItems) => (
                        <div key={repo.id}>
                            <div className="card-items">
                                <a href={repo.url} className="repo-link">
                                    <div className="spacing">
                                        <div className="section1" />
                                        <div className="section2">
                                            <div className="repo-top">
                                                <div className="repo-top-content">
                                                    <div className="repo-name">
                                                        <span className="repo-octicon">
                                                            <Octicon icon={Repo} />
                                                        </span>{' '}
                                                        &nbsp;{repo.name}
                                                    </div>
                                                    <div className="repo-description">{repo.description}</div>
                                                </div>
                                            </div>
                                            <div className="repo-lower-section">
                                                <span className="left-section">
                                                    <span className="repo-language">
                                                        <span
                                                            className="dot"
                                                            style={{ backgroundColor: langColors[repo.language] }}
                                                        />
                                                        &nbsp;&nbsp;
                                                        {repo.language}
                                                    </span>{' '}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="repo-stars">
                                                        <i className="fas fa-star" /> {repo.stars}{' '}
                                                    </span>
                                                    &nbsp;&nbsp;
                                                    <span className="repo-forks">
                                                        <Octicon icon={RepoForked} />
                                                        &nbsp;&nbsp;{repo.forks}
                                                    </span>
                                                </span>
                                                <span className="right-section">
                                                    <span className="repo-size">{repo.size} KB</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="section3" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RepoItems;
