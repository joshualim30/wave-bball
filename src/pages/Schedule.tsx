// Schedule.tsx - Schedule Page Component
// 10/24/2024 - Joshua Lim

import React from 'react';

const Schedule = () => {
    return (
        <div className='items-center m-6 md:m-10'>
            <h1 className='text-2xl font-bold my-6'>2024-2025 Schedule</h1>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showTabs=0&showCalendars=0&src=Y19mYmM4N2EzZDg1YTcxNzk5NGFkNjM0ZTllNTk5MzhhNDVhODQ3ZjQzZWQxZTdmOGJhN2QyZDg4MWE1NjI4ODJlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" className='border-width:0 w-full h-[400px] md:h-[600px] lg:h-screen rounded-lg'></iframe>
        </div>
    );
}

export default Schedule;