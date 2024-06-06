export const getMovies = async () => {
    const result = await fetch('/api/movies', {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    const resultJson = await result.json();
    return resultJson
}

export const storeMovie = async (params: any) => {
    const result = await fetch('/api/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(params)
    });

    const resultJson = await result.json();
    return resultJson
}