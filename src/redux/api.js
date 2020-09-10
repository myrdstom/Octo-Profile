import axios from 'axios';
import { baseUrl, clientId, clientSecret } from '../config/config';

export const getProfile = user => {
    axios
        .get(
            `${baseUrl}/${user}?client_id=${clientId}&client_secret=${clientSecret}`,
        )
        .then(res => res.json());
};

export const getRepos = user => {
    axios.get(`${baseUrl}/${user}/repos?per_page=50`).then(res => res.json());
};
