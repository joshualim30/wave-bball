// OurStory.tsx - Our Story Page
// 10/22/2024 - Joshua Lim

import React from 'react';

const OurStory = () => {
    return (
        <div className='items-center m-10'>
            {/* What is WAVE? */}
            <div className='max-w-xs md:max-w-2xl mx-auto min-h-screen items-center justify-center flex flex-col'>
                <h1 className='text-3xl font-bold p-6'>What is WAVE?</h1>
                <p className='text-lg'>WAVE is an acronym standing for W.ork, A.daptability, V.alues, and E.xcellence, which is the foundation for our program. Team WAVE represents this, both on and off the court.</p>
                <h1 className='text-3xl font-bold p-6'>Our Mission</h1>
                <p className='text-lg'>Our mission is to provide a safe and inclusive environment for all players to develop their skills, build relationships, and grow as individuals. We strive to create a positive and supportive community that fosters growth and success.</p>
            </div>

        </div>
    );
};

export default OurStory;