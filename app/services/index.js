import axios from 'axios';

class AppService {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL
        });
    }

    login(email, password) {
        return this.client.post('/api/login', {
            email,
            password
        }).then(response => response.data);
    }
}

export default AppService;