import axios from 'axios'

export interface MyData {
        ask:    string;
        answer: string;
    }

export const chatgpt = (req: any) => {
    return axios.post("/api/chatgpt",JSON.stringify(req))
}