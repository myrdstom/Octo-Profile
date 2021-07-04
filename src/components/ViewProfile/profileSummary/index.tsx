import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Props } from '../../../helpers/globalInterfaces';
import './profileSummary.css';

interface stateProps {
    profile: {
        profile: {
            avatar_url: string;
            name: string;
            email: string;
            location: string;
            public_repos: number;
            followers: number;
            following: number;
            login: string;
        };
        loading: boolean;
    };
    repos: {
        repos: [
            {
                language: string;
                name: string;
                stargazers_count: number;
            }
        ];
        loading: boolean;
    };
}
const ProfileSummary: FC<Props> = ({ history }) => {
    const [user, setUser] = useState({
        avatar: '',
        name: '',
        username: '',
        location: '',
        repositories: 0,
        followers: 0,
        following: 0
    });

    const { profile, repos } = useSelector((state: stateProps) => state);

    useEffect(() => {
        if (repos.repos === null && !repos.loading) {
            history.push('/');
        } else {
            const { avatar_url, name, login, location, public_repos, followers, following } = profile.profile;

            setUser({
                avatar: avatar_url,
                name,
                username: login,
                location,
                repositories: public_repos,
                followers,
                following
            });
        }
    }, [history, repos.repos, repos.loading, profile.profile]);

    const { avatar, name, username, location, repositories, followers, following } = user;

    return (
        <div className="profile__summary">
            <div className="container">
                <div className="summary__row">
                    <div className="gridItem" />
                    <div className="gridItem">
                        <div className="avatar-upload">
                            <div className="avatar-preview">
                                <img className="profile__avatar" src={avatar} alt="" />
                            </div>
                        </div>
                        <div className="name">{name}</div>
                        <div className="username">@ {username}</div>
                        <div className="location">
                            <span>
                                <i className="fas fa-map-marker" />
                            </span>{' '}
                            &nbsp; &nbsp;
                            {location}
                        </div>
                        <div className="flex__container">
                            <div className="flex__section">
                                <span className="flex-element">{repositories}</span>
                                <span className="flex-item">REPOSITORIES</span>
                            </div>
                            <div className="flex__section">
                                <span className="flex-element">{followers}</span>
                                <span className="flex-item">FOLLOWERS</span>
                            </div>
                            <div className="flex__section">
                                <span className="flex-element">{following}</span>
                                <span className="flex-item">FOLLOWING</span>
                            </div>
                        </div>
                    </div>
                    <div className="gridItem" />
                </div>
            </div>
        </div>
    );
};

export default ProfileSummary;
