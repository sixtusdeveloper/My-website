import React from 'react';
import { portfolioNavLinks } from '@/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <div className='bg-secondary'>
            <Navbar navigation={portfolioNavLinks} />

            <h1>Welcome to my portfolio</h1>
            <Footer />
            
        </div>
    );
};

export default Page;