import { UserButton } from '@clerk/nextjs';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center'>
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default HomePage;
