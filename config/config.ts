import axios from 'axios';

export const backUrl = 'http://localhost:3065';

export const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(result => result.data);
