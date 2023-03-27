import React from 'react';
import Link from "next/link";

interface MainLayoutPropsI {
    children?: React.ReactNode

}

const MainLayout: React.FC<MainLayoutPropsI> = ({children}) => {
    return (
        <>
            <header className="bg-red-900 py-6 mb-6">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-4xl text-white font-bold">Next APP</div>
                    <ul className="text-gray-300 text-2xl flex gap-12">
                        <li className="hover:text-blue-100"><Link href="/">All meetups</Link></li>
                        <li className="hover:text-blue-100"><Link href="/new-meetup">Add New Meetup</Link></li>
                    </ul>
                </div>
            </header>
            <main className="">{children}</main>
            <div></div>
        </>
    );
};

export default MainLayout;