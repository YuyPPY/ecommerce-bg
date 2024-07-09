import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React from 'react'

export default function layout({ children }) {
    return (
        // TODO: ໜ້າຈັດການ layout ຂອງ dashboard

        <div className='flex '>
            {/* Sidebar*/}
            <Sidebar />
        <div className='w-full'>
                {/* Hesder */}
                <Navbar />
                <main className=' ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16 ' >
                    {children}
                </main>
                {/* Main */}
            </div>
            {/* Main Body */}
        </div>
    )
}

