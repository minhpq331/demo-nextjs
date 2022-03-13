import axios from 'axios';
import { API_BASE_URL } from '../config/environment';
import { Post } from '../models/Post';
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

    static async getPostById(id: string): Promise<Post> {
        // GET /posts/:id
        const response = await axios.get<SingleResponse<Post>>(
            `${API_BASE_URL}/api/posts/${id}`
        );
        return response.data.data;
        // you can access response.data.status, .message, .data
    }
}
