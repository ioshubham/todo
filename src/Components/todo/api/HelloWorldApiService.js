import axios from 'axios'

// export function reteriveHelloWorldBean() {
//     return (
//         axios.get('http://localhost:8080/hello-world-bean')
//     )
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const reteriveHelloWorldBean = ()=> apiClient.get('/hello-world-bean');
export const executeBasicAuthenticationService
= (token)=> apiClient.get(`/hello-world/path-variable/${username}`,{
    headers: {
        Authorization: 'Basic '
    }
})