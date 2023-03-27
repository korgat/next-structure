import React from 'react';

interface MainLayoutPropsI {
    children: React.ReactNode
}
const MainLayout: React.FC<MainLayoutPropsI> = ({children}) => {
    return (
        <>
        <header className="bg-red-900 py-6 mb-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-4xl text-white font-bold">Next APP</div>
                <ul className="text-gray-300 text-lg flex gap-4 font-semibold">
                    <li>All meetups</li>
                    <li>All meetups</li>
                </ul>
            </div>
        </header>
        <main>{children}</main>
        </>
    );
};

export default MainLayout;