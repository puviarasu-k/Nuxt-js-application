import { useFetch } from "nuxt/app"

export async function machineList() {
    const { data: data } = await useFetch('http://localhost:9600/api/machineList', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return data;
}

export async function machineListDetails(body) {
    const { data: data } = await useFetch('http://localhost:9600/api/machineListDetails', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return data;
}

export async function machineDropoList(body) {
    const { data: data } = await useFetch('http://localhost:9600/api/machineDropList', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return data;
}

export async function reportDownload(body) {
    const { data: data } = await useFetch('http://localhost:9600/api/reportDownload', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return data;
}