const url = 'https://mwks-joke-service.azurewebsites.net/api/joke/random'

export type Joke = {
    id: number
    joke: string
    punchLine: string
}
export const getJoke = async (): Promise<Joke> => {
    const response = await fetch(url)
    return (await response.json()) as Joke
}
