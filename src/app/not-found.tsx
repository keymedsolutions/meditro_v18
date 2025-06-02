/* eslint-disable react/no-unescaped-entities */
import NotFoundPage from '@/components/elements/NotFoundPage'
import MainLayout from '@/components/layout/MainLayout'
import { redirect } from 'next/navigation';
import React from 'react'
// Import Images


const NotFound = () => {
    redirect('/');
    
    return (
        <MainLayout>

            <NotFoundPage />
        </MainLayout>
    )
}

export default NotFound