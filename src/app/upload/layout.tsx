import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';


import { redirect } from 'next/navigation';
import React from 'react';


export default async function UploadLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  
  if (!userId) {
    redirect('/');
  }
  const user = await currentUser();
    
  if (!user?.publicMetadata?.isAdmin) {
    redirect('/');
  }

  return <>{children}</>;
}
