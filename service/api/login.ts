import { useFetch } from "nuxt/app"

export default async function login(body:any) {
        const { data: data } = await useFetch('httP://localhost:9600/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return data;
}