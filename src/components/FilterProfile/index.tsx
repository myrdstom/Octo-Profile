import React, { FunctionComponent, useEffect, useRef, useState, KeyboardEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "react-simple-snackbar";
import {closeOptions} from '../../helpers/snackbar.styles';
import {setRepos, setProfile} from '../../redux/actions/types';
import { History } from 'history';

interface Props{
    history : History
}

const FilterProfile:  FunctionComponent<Props> = ({ history }) => {
    const [username, setUsername] = useState('');
    const [closeSnackbar] = useSnackbar(closeOptions);

    const dispatch = useDispatch();
    const didMountRef = useRef(false);
    const profile = useSelector((state:{ profile: {profile:{email: string, location: string }, loading: boolean} }) => state.profile);

    useEffect(() => {
        if (didMountRef.current) {
            if (profile && !profile.loading && profile?.profile?.location) {
                history.push('/profile');
            } else if(profile?.profile?.email === null) {
                history.push('/');
                closeSnackbar('this github user does not exist')

            }
        } else didMountRef.current = true;
    }, [history, profile, closeSnackbar]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            if (username === '') {
                closeSnackbar('please input something')
            } else {
                dispatch(setProfile(username));
                dispatch(setRepos(username));
            }
        }
    };

    return (
        <div>
            <div className="filter__account">
                <div className="grid__container">
                    <div />
                    <div className="filter__content">
                        <svg
                            width="84"
                            height="84"
                            viewBox="0 0 301 299"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="301" height="299" fill="#1A1E22" />
                            <path
                                d="M150.5 0C67.3989 0 0 66.9386 0 149.5C0 215.554 43.1182 271.592 102.929 291.363C110.442 292.746 112.875 288.111 112.875 284.175V256.343C71.0109 265.387 62.2945 238.702 62.2945 238.702C55.4467 221.422 45.5764 216.825 45.5764 216.825C31.9185 207.543 46.6174 207.743 46.6174 207.743C61.7301 208.789 69.6815 223.154 69.6815 223.154C83.1011 246.002 104.886 239.399 113.477 235.575C114.819 225.919 118.719 219.317 123.034 215.591C89.6102 211.792 54.4685 198.972 54.4685 141.701C54.4685 125.368 60.3505 112.038 69.97 101.573C68.4148 97.7979 63.2602 82.5863 71.4373 62.0051C71.4373 62.0051 84.0793 57.9935 112.837 77.3289C124.84 74.015 137.707 72.358 150.5 72.2957C163.293 72.358 176.173 74.015 188.2 77.3289C216.933 57.9935 229.55 62.0051 229.55 62.0051C237.74 82.5988 232.585 97.8104 231.03 101.573C240.687 112.038 246.519 125.381 246.519 141.701C246.519 199.122 211.315 211.767 177.803 215.467C183.196 220.101 188.125 229.196 188.125 243.149V284.175C188.125 288.149 190.533 292.821 198.171 291.351C257.932 271.554 301 215.529 301 149.5C301 66.9386 233.614 0 150.5 0Z"
                                fill="#0071F3"
                            />
                        </svg>

                        <div id="myForm">
                            <div className="form-group">
                                <label htmlFor="username">
                                    View you're Octo-Profile
                                </label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyPress}
                                    id="username"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div />
                </div>
            </div>
        </div>
    );
};

export default FilterProfile;

