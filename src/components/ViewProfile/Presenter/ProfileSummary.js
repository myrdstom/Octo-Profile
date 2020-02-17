import React from 'react';

const ProfileSummary = ({
    avatar,
    name,
    username,
    location,
    followers,
    following,
    repositories,
}) => {
    return (
        <div className="profile__summary">
            <div className="container">
                <div className="summary__row">
                    <div className="gridItem" />
                    <div className="gridItem">
                        <div className="avatar-upload">
                            <div className="avatar-preview">
                                <img
                                    className="profile__avatar"
                                    src={avatar}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="name">{name}</div>
                        <div className="username">@ {username}</div>
                        <div className="location">
                            <span>
                                <i className="fas fa-map-marker" />
                            </span> &nbsp; &nbsp;
                            {location}
                        </div>
                        <div className="flex__container">
                            <div className="flex__section">
                                <span className="flex-element">
                                    {repositories}
                                </span>
                                <span className="flex-item">REPOSITORIES</span>
                            </div>
                            <div className="flex__section">
                                <span className="flex-element">
                                    {followers}
                                </span>
                                <span className="flex-item">FOLLOWERS</span>
                            </div>
                            <div className="flex__section">
                                <span className="flex-element">
                                    {following}
                                </span>
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
