export const getFetch = (url: any, params: any) => {
    // create query string
    const query = `?${params}`;
    return fetch(`${url}+${params}`)
}

export const getFetchChanged = (url: any, params: any) => {

    return axios(url, {
        params: params
    })
}