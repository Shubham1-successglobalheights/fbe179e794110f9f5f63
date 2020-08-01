import axios from 'axios';
const api_key = "OaXWuGMfbxbRfcAz65y6wrG8smrVqY57GkGlTNJc";
export const loginApi = (asteroidId) => axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${api_key}`)
export const randomAstroidApi = () => axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')