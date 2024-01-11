'use client'
import { useSession } from 'next-auth/react'
import React, { useContext, useState } from 'react'
import { CmsContext } from '../context/cms'
import AdminBtn from './adminBtn'
import { SpenpoLanding } from 'spenpo-landing'
import { TopComponents } from './topComponents'

export const LandingPage: React.FC = () => {
  const editable = useState(false)
  const session = useSession()
  const { landingCms } = useContext(CmsContext)
  return (
    <>
      <AdminBtn />
      <SpenpoLanding
        cms={landingCms}
        editable={session.status === 'authenticated' ? editable : undefined}
        topComponents={<TopComponents />}
      />
    </>
  )
}
