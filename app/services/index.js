import axios from 'axios';

const BASE_URL = 'http://codeforreal.herokuapp.com/';

class AppService {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL || BASE_URL
        });
    }

    async login(email, password) {
        const response = await this.client.post('/api/login', { email, password });
        return response.data;
    }
}

export default AppService;