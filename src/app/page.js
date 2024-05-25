'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'



const Home = () => {
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated (replace with your logic)
        const isAuthenticated = false; // Replace with your actual authentication check

        if (!isAuthenticated) {
            router.push('/login');
        }
    }, []); // Empty dependency array to run only on initial render

    return (
        <>

        </>
    )
}

export default Home
