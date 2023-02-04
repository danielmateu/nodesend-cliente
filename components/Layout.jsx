import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Header } from './Header'


export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>ReactNode Send</title>
            </Head>


            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <Header />
                    <main className="p-12">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
