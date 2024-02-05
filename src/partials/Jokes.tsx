import { Seperator } from '@/components/Seperator'
import { type Joke, getJoke } from '@/lib/utils'
import { Spinner } from '@material-tailwind/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
export const Jokes = () => {
    const [currentJoke, setCurrentJoke] = useState<Joke>()
    const [showPunchline, setShowPunchline] = useState(true)
    const [error, setError] = useState<string>()
    const fetchJoke = async () => {
        setCurrentJoke(undefined)
        setShowPunchline(false)
        const joke = await getJoke().catch(() => setError('Failed to fetch joke'))
        joke && setCurrentJoke(joke)
        setError(undefined)
    }

    useEffect(() => {
        void fetchJoke().catch(() => setError('Failed to fetch joke'))
    }, [])

    return (
        <div className="flex flex-col items-center text-white">
            <header className="mt-4 flex w-screen justify-between p-4 md:px-10">
                <div className="flex flex-col items-center">
                    <Button onClick={fetchJoke} className="rounded-full bg-blue-600 p-4">
                        Get Random Joke
                    </Button>
                </div>
                <div className="flex items-center space-x-4 p-4">
                    <Link href={'https://mwks-joke-service.azurewebsites.net/swagger/index.html'}>
                        <p>View API Docs</p>
                    </Link>
                </div>
            </header>
            <Seperator />
            {error && <p className="text-red-500">{error}</p>}
            {!error && (
                <div className="flex max-h-[95%] flex-col items-center space-y-10 pt-12 text-center">
                    <h1 className="text-2xl font-bold">
                        {currentJoke ? currentJoke.joke : <Spinner color="blue" className="h-10 w-10" />}
                    </h1>
                    {currentJoke && (
                        <Button onClick={() => setShowPunchline(!showPunchline)} className="rounded-lg bg-blue-800 p-4">
                            {showPunchline ? 'Hide' : 'Show'} Punchline
                        </Button>
                    )}

                    <p className="text-xl font-semibold">{showPunchline ? currentJoke?.punchLine : null}</p>
                </div>
            )}
        </div>
    )
}
