import axios from 'axios';

import { API_URL } from './constants';


export const getResults = () => axios.get(API_URL);
