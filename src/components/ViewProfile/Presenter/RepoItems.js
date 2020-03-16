import React from 'react';
import Octicon, { Repo, RepoForked } from '@primer/octicons-react';
import langColors from '../../../helpers/langColors';

const RepoItems = props => {
    const { name, description, language, stars, forks, size, url } = props.repo;
    return (
        <div>
            <div className="card-items">
                <a href={url} className="repo-link">
                    <div className="spacing">
                        <div className="section1" />
                        <div className="section2">
                            <div className="repo-top">
                                <div className="repo-top-content">
                                    <div className="repo-name">
                                        <span className="repo-octicon">
                                            <Octicon icon={Repo} />
                                        </span>{' '}
                                        &nbsp;{name}
                                    </div>
                                    <div className="repo-description">
                                        {description}
                                    </div>
                                </div>
                            </div>
                            <div className="repo-lower-section">
                                <span className="left-section">
                                    <span className="repo-language">
                                        <span
                                            className="dot"
                                            style={{
                                                backgroundColor:
                                                    langColors[language],
                                            }}
                                        />
                                        &nbsp;&nbsp;{language}
                                    </span>{' '}
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="repo-stars">
                                        <i className="fas fa-star" /> {stars}{' '}
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="repo-forks">
                                        <Octicon icon={RepoForked} />
                                        &nbsp;&nbsp;{forks}
                                    </span>
                                </span>
                                <span className="right-section">
                                    <span className="repo-size">{size} KB</span>
                                </span>
                            </div>
                        </div>
                        <div className="section3" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default RepoItems;
