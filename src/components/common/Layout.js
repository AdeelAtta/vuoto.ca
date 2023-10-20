import React from 'react'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'


import Header from './Header'
import Footer from './Footer'
import Preloader from './preLoader'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {

    const router = useRouter();

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 3000);
    }, []);
    return (
        <>
         { !router.pathname.includes(`/administration`) && loader ? <Preloader /> : null }
            { !router.pathname.includes(`/administration`) && <Header /> }
            <main className={`min-h-screen `}>
                {children}
            </main>
            { !router.pathname.includes(`/administration`) && <Footer /> }
           
        </>

    )
}