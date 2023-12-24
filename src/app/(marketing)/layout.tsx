import type { ReactNode } from 'react';

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full bg-red-300'>
      {/* Navbar */}

      <main className='pt-40 pb-20 bg-red-300'>{children}</main>
      <div>??</div>
    </div>
  );
};

export default MarketingLayout;
