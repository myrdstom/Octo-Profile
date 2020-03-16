import React from 'react';
import RepoItems from './RepoItems';

const Repos = props => {
    const { repositories } = props;
    return (
        <div>

                <div className="repositories">
                    <div className="repos-title"> Popular Repos</div>
                    <div className="repo-cards">
                        {repositories.map(repo => (
                            <RepoItems key={repo.id} repo={repo} />
                        ))}
                    </div>
                </div>

        </div>
    );
};
export default Repos;
