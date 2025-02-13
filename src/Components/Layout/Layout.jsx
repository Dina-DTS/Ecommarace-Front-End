import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow container mx-auto lg:max-w-screen-xl">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
