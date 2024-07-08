import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React from 'react'

export default function layout({ children }) {
    return (
        // TODO: ໜ້າຈັດການ layout ຂອງ dashboard

        <div className='flex'>
            {/* Sidebar*/}
            <Sidebar />
            <div className=' w-full'>
                {/* Hesder */}
                <Navbar />
                <main>
                    {children}
                </main>
                {/* Main */}
            </div>
            {/* Main Body */}
        </div>
    )
}

