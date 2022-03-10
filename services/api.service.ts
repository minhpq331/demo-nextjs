import axios from 'axios';
import { API_BASE_URL } from '../config/environment';
import { SingleResponse } from '../models/Response';
import { User } from '../models/User';

export class ApiService {
    static async login(username: string, password: string): Promise<User> {
        // POST /login?version=test with custom header
        const response = await axios.post<SingleResponse<User>>(
            `${API_BASE_URL}/api/login`,
            { username, password },
            {
                headers: {
                    // set header
                    'Some-Header': 'test',
                },
                params: {
                    // set query string
                    version: 'test',
                },
            }
        );
        return response.data.data;
        // you can access response.data.status, .message, .data
    }
}
