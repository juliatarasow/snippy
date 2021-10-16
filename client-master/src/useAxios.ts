import axios, { AxiosResponse } from 'axios'

export const axiosConfig = () => {
    return {
        hosts: ['localhost'],
        endpoints: ['user', 'post', 'snippet'],
        config: {
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                'cache-control': 'no-cache',
                'Access-Control-Allow-Headers':
                    'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTYyNjAwODcwMywiZXhwIjoxNjI2MDk1MTAzfQ._l_eJnQFcPaMEG9-l-5Rnm7pCAUE_DrVQHAeLFPyfgo',
                'x-api-key': 'AIza0SyDv2jKlVRuZObh2njhRSdcOVq21VlHHDEPQ',
            },
        },
    }
}

/**
 * Typescript Function Overloading implemented
 * @param payload object with data
 * @param endpoint optional
 * register can be used with another endpoint if needed
 * @returns {data, headers, status } Object
 */

const { config } = axiosConfig()

export async function register<T>(endpoint: string, payload: T) {
    let response = axios.post(endpoint, payload, config)
    let data = response.then((json) => json.data)
    let headers = response.then((json) => json.headers)
    let status = response.then((json) => json.status)

    return { data, headers, status }
}

export async function get(path: string) {
    let response
    try {
        response = await axios.get(path, config)
    } catch (error) {
        console.log(error)
        throw new Error('Exeption')
    }
    return response
}

export async function post( path: string, body: any,config?: {}) {
    let response
    try {
        response = await axios.post(path, body, config)
    } catch (e) {
        console.log(e)
    }
    return response
}

export function* posts() {
    yield [
        {
            name: 'fake Post',
            content: 'lorem ipsum at tami loreto momota paleto popo',
        },
    ]
}

export const fetching = <T>(path: string, body: any): Promise<AxiosResponse<T>> => {
    return new Promise((resolve, reject) => {
        axios.post(path, body, config)
        .then((response) => {
            resolve(response)

        })
        .catch(error => {
        
            reject(error.response.data.message)

        })
    })}