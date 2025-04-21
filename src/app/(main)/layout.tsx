import MainLayout from '@/components/layout/MainLayout';
import React from 'react'

const MainSiteLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <MainLayout>{children}</MainLayout>  
    </>
  )
}

export default MainSiteLayout
